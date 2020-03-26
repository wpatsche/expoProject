import HomeActivity from "./screen/home/index";
import MainActivity from "./screen/main/index";

const RootStack = createStackNavigator(
  {
    Home: { screen: HomeActivity },
    Main: { screen: MainActivity }
  },
  {
    initialRouteName: "Home"
  }
);

export default class App extends Component {
  render() {
    return (
      <>
        <StatusBar barStyle="light-content" />

        <RootStack />
      </>
    );
  }
}
