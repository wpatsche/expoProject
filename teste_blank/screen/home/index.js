import React from "react";
import { View, StatusBar, TextInput, Button } from "react-native";

import Header from "./components/Header";
import Body from "./components/Body";
import styles from "./style/index";

export default function Home() {
  <>
    <Header title="e-Rural" />
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
    <View style={styles.viewbtn}>
      <Button color={"#61ce70"} style={styles.btn} title="Fazer Login" />
    </View>
  </>;
}
