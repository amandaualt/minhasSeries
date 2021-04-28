import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert,
} from "react-native";
import FormRow from "../components/FormRow";
import firebase from "firebase";
import { processLogin } from "../actions";
import { connect } from "react-redux";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      isLoading: false,
      message: "",
    };
  }

  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyDMuyvvkRiJHnHowOuwIVlHm8MfR7LRCEQ",
      authDomain: "minhasseries-92e19.firebaseapp.com",
      projectId: "minhasseries-92e19",
      storageBucket: "minhasseries-92e19.appspot.com",
      messagingSenderId: "582140047974",
      appId: "1:582140047974:web:9638068e54590138f133a7",
      measurementId: "G-YZ6RKEPF0N",
    };

    firebase.initializeApp(firebaseConfig);
  }

  onChangeHandler(field, valor) {
    this.setState({
      [field]: valor,
    });
  }

  processLogin() {
    this.setState({ isLoading: true });
    const { email, password } = this.state;

    this.props
      .processLogin({ email, password })
      .then((user) => {
        if (user) {
          this.props.navigation.replace("Main");
        } else {
          this.setState({
            isLoading: false,
            message: "",
          });
        }
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          message: this.getMessageByError(error.code),
        });
      });
  }

  getMessageByError(code) {
    switch (code) {
      case "auth/user-not-found":
        return "E-mail inexistente.";
      case "auth/wrong-password":
        return "Senha incorreta.";
      default:
        return "Erro desconhecido.";
    }
  }

  renderButton() {
    if (this.state.isLoading) return <ActivityIndicator />;
    return <Button title="Entrar" onPress={() => this.processLogin()} />;
  }
  renderMessage() {
    const { message } = this.state;

    if (!message) return null;

    return (
      <View>
        <Text>{message}</Text>
      </View>
    );
  }

  render() {
    return (
      <View>
        <FormRow>
          <TextInput
            style={styles.textInput}
            placeholder="Email: user@user.com"
            value={this.state.email}
            onChangeText={(valor) => {
              this.onChangeHandler("email", valor);
            }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </FormRow>

        <FormRow>
          <TextInput
            style={styles.textInput}
            placeholder="Senha"
            secureTextEntry
            value={this.state.password}
            onChangeText={(valor) => {
              this.onChangeHandler("password", valor);
            }}
          />
        </FormRow>

        {this.renderButton()}
        {this.renderMessage()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "gray",
    paddingLeft: 16,
    paddingRight: 16,
  },
});

export default connect(null, { processLogin })(LoginScreen);
