import React, { Component } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

class ContainerImg extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.images}>
          <Image
            style={styles.img1}
            source={require("../assets/BackgroundHeader.png")}
          />
          <Image
            style={styles.img2}
            source={require("../assets/Kapitour.png")}
          />
        </View>
        <Text style={styles.slogan}>
          Somos a Kapitour , e viemos lhe revelar oque Maricá pode te
          proporcionar
        </Text>
      </View>
    );
  }
}

export default ContainerImg;

// CSS

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  img1: {
    aspectRatio: 3,
  },
  slogan: {
    color: "#f0f0f0",
    textAlign: "center",
  },
});
