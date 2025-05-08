import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

class Map extends Component {
  render() {
    return (
      <View style={styles.component}>
        <View style={styles.mapa}>
          <Text>Mapa</Text>
        </View>
        <View style={styles.informacoes}>
          <View style={styles.img}>
            <Text>IMG</Text>
          </View>
          <View style={styles.conteudo}>
            <Text>Titulo</Text>
            <Text>Dados</Text>
          </View>
          <View style={styles.btn}>
            <Text>Botão</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Map;

const styles = StyleSheet.create({
  component: {
    alignItems: "center",
    marginTop: 20,
  },
  mapa: {
    backgroundColor: "red",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: 350,
    width: 350,
  },
  informacoes: {
    backgroundColor: "white",

    height: 400,
    width: 350,
    marginTop: 5,
  },
  img: {
    backgroundColor: "yellow",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: "40%",
  },
  conteudo: {
    backgroundColor: "pink",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  btn: {
    backgroundColor: "blue",
    textAlign: "center",
    justifyContent: "space-around",
    height: 50,
    width: 70,
    marginLeft: "70%",
  },
});
