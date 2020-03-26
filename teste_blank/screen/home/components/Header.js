import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Header extends Component {
  render() {
    return (
      <View style={styles.head}>
        <Text style={styles.thead}> {this.props.title} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  head: {
    padding: 20,
    paddingBottom: 25,
    backgroundColor: "#61CE70"
  },

  thead: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 25,
    marginTop: 15,
    fontWeight: "bold",
    color: "#fff"
  }
});
