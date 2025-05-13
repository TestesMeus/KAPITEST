import React, { useEffect } from "react";
import * as NavigationBar from "expo-navigation-bar";
import * as SystemUI from "expo-system-ui";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Páginas
import Home from "./Screens/Home";
import Login from "./Screens/Login";
import Rotas from "./Screens/Rotas";
import Loja from "./Screens/Loja";
import Contato from "./Screens/Contato";
import Cadastro from "./Screens/Cadastro";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Stack interno para a aba Login
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}

// Abas principais
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarInactiveTintColor: "#ffffffaa",
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={AuthStack}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Rotas"
        component={Rotas}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="navigate-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Loja"
        component={Loja}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cart-outline" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="settings-outline" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    const hideNavigationBar = async () => {
      try {
        await SystemUI.setBackgroundColorAsync("black");
        await NavigationBar.setBehaviorAsync("inset-swipe");
        await NavigationBar.setVisibilityAsync("hidden");
      } catch (error) {
        console.warn("Erro ao esconder NavigationBar:", error);
      }
    };
    hideNavigationBar();
  }, []);

  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 16,
    left: 24,
    right: 24,
    height: 56,
    borderRadius: 30,
    backgroundColor: "rgba(0, 0, 0, 0.85)",
    borderTopWidth: 0,
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    paddingHorizontal: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});
