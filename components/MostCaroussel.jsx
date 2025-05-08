import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

class MostCaroussel extends Component {
  render() {
    return (
      <View>
        <Text style={styles.texto}>Rotas mais realizadas:</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
        </ScrollView>
      </View>
    );
  }
}

export default MostCaroussel;

// CSS

const styles = StyleSheet.create({
  box1: {
    backgroundColor: "blue",
    borderColor: "red",
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: 200,
    width: 150,
    borderCurve: 20,
    margin: 10,
  },
  box2: {
    backgroundColor: "yellow",
    height: 200,
    width: 150,
    borderCurve: 20,
    margin: 10,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  box3: {
    backgroundColor: "orange",
    height: 200,
    width: 150,
    borderCurve: 20,
    margin: 10,
    borderTopLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  texto: {
    color: "white",
    fontSize: 12,
  },
});
