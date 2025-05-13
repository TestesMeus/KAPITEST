import React, { useEffect,useRef, useState } from "react";
import * as NavigationBar from "expo-navigation-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Animated } from "react-native";

// Páginas
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Rotas from "./Screens/Rotas";
import Loja from "./Screens/Loja";
import Contato from "./Screens/Contato";
import Cadastro from "./Screens/Cadastro";

// Menu fixo
import BottomMenu from "./elements/BottomMenu";

const Tab = createBottomTabNavigator();

export default function App() {
useEffect(() => {
  // Define o comportamento da barra de navegação
  const hideNavigationBar = async () => {
    await NavigationBar.setVisibilityAsync("hidden");
  };
  
  hideNavigationBar();
}, []);
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Tab.Navigator
          screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Rotas" component={Rotas} />
          <Tab.Screen name="Loja" component={Loja} />
          <Tab.Screen name="Contato" component={Contato} />
          <Tab.Screen name="Register" component={Cadastro} />
        </Tab.Navigator>

        {/* Menu fixo visível em todas as telas */}
        <BottomMenu />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
