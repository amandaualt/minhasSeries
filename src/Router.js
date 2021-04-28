import { createAppContainer, createStackNavigator } from "react-navigation";
import LoginScreen from "./pages/LoginScreen";
import SeriesScreen from "./pages/SeriesScreen";
import SerieDetailScreen from "./pages/SerieDetailScreen";
import NewSerieScreen from "./pages/NewSeriesScreen";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        title: "Bem vindo.",
      },
    },
    Main: {
      screen: SeriesScreen,
    },
    SerieDetail: {
      screen: SerieDetailScreen,
      navigationOptions: ({ navigation }) => {
        const { serie } = navigation.state.params;
        return { title: serie.title };
      },
    },
    NewSerie: {
      screen: NewSerieScreen,
      navigationOptions: ({ navigation }) => {
        if (navigation.state.params && navigation.state.params.serieToEdit) {
          return {
            title: navigation.state.params.serieToEdit.title,
          };
        }
        return {
          title: "Nova Série",
        };
      },

      // title: "Nova Serie",
    },
  },
  {
    defaultNavigationOptions: {
      title: "Minhas series",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#003994",
        borderBottomWidth: 1,
        borderBottomColor: "##c5c5c5",
      },
      headerTitleStyle: {
        color: "white",
        fontSize: 30,
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
