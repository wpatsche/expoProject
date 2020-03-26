import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  viewhead: {
    backgroundColor: "#00d871",
    alignItems: "center",
    borderRadius: 20,
    padding: 15
  },

  viewbody: {
    flex: 1,
    backgroundColor: "#61ce70",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-around"
  },

  viewfoot: {
    height: 150,
    flexDirection: "column",
    justifyContent: "space-between",
    alignContent: "center",
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: "#007e6e"
  },

  viewbtn: {
    padding: 20,
    height: 75,
    backgroundColor: "#007e6e"
    // color: "#f00"
  },

  img: {
    flex: 1,
    height: 200,
    width: 200,
    resizeMode: "center"
  },

  texthead: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#e4e4e4"
  },
  cpf: {
    color: "#fff",
    backgroundColor: "#00d871",
    alignItems: "center",
    borderRadius: 30,
    marginVertical: 20,
    marginHorizontal: 20,
    padding: 10,
    paddingHorizontal: 20
  },

  senha: {
    color: "#fff",
    backgroundColor: "#00d871",
    alignItems: "center",
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 30,
    padding: 10,
    paddingHorizontal: 20
  },

  btn: {
    alignItems: "center",
    borderWidth: 0.5,
    opacity: 0.6
  }
});

export default styles;
