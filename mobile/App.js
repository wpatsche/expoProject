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
import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screen/home/index";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
