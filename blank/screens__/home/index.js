import React from "react";
import {
  View,
  StatusBar,
  TextInput,
  Button,
  TouchableOpacity
} from "react-native";

import Routes from "../../src/routes/routes";
import Header from "./components/Header";
import Body from "./components/Body";
import styles from "./style/index";

const Home = ({ navigation }) => (
  <>
    {/* <Header title="e-Rural" /> */}
    <Body />
    <View style={styles.viewfoot}>
      <TextInput
        style={styles.cpf}
        keyboardType={"numeric"}
        placeholder="CPF"
        placeholderTextColor="#fff"
        maxLength={11}
      />
      <TextInput
        style={styles.senha}
        placeholder="Senha"
        placeholderTextColor="#fff"
      />
      {/* <Button title="Fazer Login" /> */}
    </View>

    {/* <TouchableOpacity
      style={styles.btn}
      onPress={() => this.props.navigation.navigate("Main")}
    ></TouchableOpacity> */}

    <View style={styles.viewbtn}>
      <Button
        color={"#61ce70"}
        style={styles.btn}
        title="Fazer Login"
        onPress={() => Routes.navigate("Main")}
      />
    </View>
  </>
);

Home.navigationOptions = {
  title: "e-Rural"
};

export default Home;
