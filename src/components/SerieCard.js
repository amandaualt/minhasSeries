import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const SerieCard = ({ serie, isLeft, onNavigate }) => (
  <TouchableOpacity
    onPress={onNavigate}
    style={[styles.container, isLeft ? styles.leftColumn : styles.RightColumn]}
  >
    <View style={styles.card}>
      <Image
        source={{
          uri: `data:image/jpeg;base64,${serie.img}`,
        }}
        aspectRatio={1}
        resizeMode="contain"
      />
      <View style={styles.cardTitleContainer}>
        <Text style={styles.cardTittle}>{serie.title}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
  },
  container: {
    // flex: 0.5,
    width: "50%",
    padding: 5,
    height: Dimensions.get("window").width / 2,
  },
  cardTitleContainer: {
    backgroundColor: "black",
    opacity: 0.8,
    height: 50,
    position: "absolute",
    bottom: 0,
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingRight: 5,
    paddingLeft: 5,
    paddingTop: 10,
  },
  cardTittle: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  leftColumn: {
    paddingLeft: 10,
  },
  RightColumn: {
    paddingRight: 10,
  },
});

export default SerieCard;
