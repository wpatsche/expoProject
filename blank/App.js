// import * as React from "react";
// import { View, Text, StatusBar } from "react-native";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomeScreen from "./screens__/home/index";

// const Stack = createStackNavigator();

// function App() {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="e-Rural" component={HomeScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </>
//   );
// }

// export default App;

import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import Routes from "./src/routes/routes";

AppRegistry.registerComponent(appName, () => Routes);
