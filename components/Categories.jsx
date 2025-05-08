import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

class Categories extends Component {
  render() {
    return (
      <View>
        <Text style={styles.titulo}>Categorias</Text>
        <ScrollView
          style={styles.componente}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <View style={styles.filtro}></View>
          <View style={styles.filtro}></View>
          <View style={styles.filtro}></View>
          <View style={styles.filtro}></View>
          <View style={styles.filtro}></View>
          <View style={styles.filtro}></View>
          <View style={styles.filtro}></View>
          <View style={styles.filtro}></View>
          <View style={styles.filtro}></View>
        </ScrollView>
      </View>
    );
  }
}

export default Categories;

//CSS

const styles = StyleSheet.create({
  componente: {
    heigth: 100,
    marginTop: 5,
  },
  titulo: {
    color: "white",
    fontSize: 12,
  },
  filtro: {
    backgroundColor: "red",
    height: 50,
    width: 50,
    borderRadius: 99,
    margin: 10,
  },
});
