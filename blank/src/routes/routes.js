import Home from "../../screens__/home/index";
import Main from "../../screens__/main/index";

import { createAppContainer, createStackNavigator } from "react-navigation";

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    Main: Main
  })
);

export default Routes;
