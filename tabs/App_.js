// import React, { Component } from "react";
// import { Platform, StyleSheet, Text, View } from "react-native";
// import { createStackNavigator } from "react-navigation";
// import Home from "./screen/home/index";
// import Main from "./screen/main/index";

// export default class App extends Component {
//   render() {
//     return <AppStackNavigator />;
//   }
// }

// const AppStackNavigator = createStackNavigator({
//   Home: Home,
//   Main: Main
// });

import { AppRegistry } from "react-native";
import App from "./screen_/home/index";

AppRegistry.registerComponent("ReactNavigationExample", () => App);
