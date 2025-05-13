import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Animated,
  StyleSheet,
} from "react-native";

export default function Cadastro() {
  const [registered, setRegistered] = useState(false);
  const formOpacity = useRef(new Animated.Value(0)).current;
  const formScale = useRef(new Animated.Value(0.8)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(formOpacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(formScale, {
        toValue: 1,
        friction: 5,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const handleRegister = () => {
    // Simula envio e faz animação de saída
    Animated.parallel([
      Animated.timing(formOpacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(formScale, {
        toValue: 0.8,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setRegistered(true);
    });
  };

  return (
    <View style={styles.container}>
      {!registered ? (
        <Animated.View
          style={[
            styles.formBox,
            {
              opacity: formOpacity,
              transform: [{ scale: formScale }],
            },
          ]}
        >
          <Text style={styles.label}>Nome:</Text>
          <TextInput style={styles.input} />
          <Text style={styles.label}>Email:</Text>
          <TextInput style={styles.input} keyboardType="email-address" />
          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.input} secureTextEntry />
          <Text style={styles.label}>Data de Nascimento:</Text>
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </Animated.View>
      ) : (
        <Animated.View
          style={[
            styles.formBox,
            {
              opacity: formOpacity,
              transform: [{ scale: formScale }],
            },
          ]}
        >
          <Text style={styles.success}>Cadastro realizado com sucesso!</Text>
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1d",
    justifyContent: "center",
    alignItems: "center",
  },
  formBox: {
    backgroundColor: "#333",
    padding: 30,
    borderRadius: 10,
    width: 300,
  },
  label: {
    color: "white",
    marginTop: 10,
  },
  input: {
    backgroundColor: "#4e4e50",
    color: "white",
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#c3073f",
    marginTop: 20,
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  success: {
    color: "#0f0",
    fontSize: 18,
    textAlign: "center",
  },
});
