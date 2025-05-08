import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

class Routes extends Component {
  render() {
    return (
      <View style={styles.componente}>
        <View style={styles.fundo}></View>
        <View style={styles.btn}></View>
      </View>
    );
  }
}

export default Routes;

//CSS

const styles = StyleSheet.create({
  componente: {
    height: 100,
    width: "100%",
    marginTop: 30,
  },
  fundo: { backgroundColor: "red", height: 500 },

  btn: {
    backgroundColor: "blue",
    width: 70,
    margin: 5,
  },
});
