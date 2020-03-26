import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const image = { uri: "https://reactjs.org/logo-og.png" };

export default class Body extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={image} style={styles.image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  }
});
