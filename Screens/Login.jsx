import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // 🔗 Aqui entra a comunicação com o back-end para autenticação
    // Exemplo:
    // fetch('/api/login', { method: 'POST', body: JSON.stringify({ email, senha }) })

    Alert.alert(
      "Login em breve",
      "Aqui será feita a autenticação com o back-end."
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.formBox}>
        <Text style={styles.label}>Email:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          placeholderTextColor="#ccc"
        />
        <Text style={styles.label}>Senha:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#ccc"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
          <Text style={styles.cadastroText}>Cadastrar-se</Text>
        </TouchableOpacity>

        <View style={styles.divider}>
          <View style={styles.line} />
          <Text style={styles.dividerText}>Login por:</Text>
          <View style={styles.line} />
        </View>

        <View style={styles.socialIcons}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="google" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="facebook" size={20} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="twitter" size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1d",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#c3073f",
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
  backButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  formBox: {
    backgroundColor: "#333",
    padding: 30,
    borderRadius: 10,
    width: "100%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  label: {
    color: "#fff",
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#4e4e50",
    color: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#c93434",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  cadastroText: {
    color: "#ff5e5e",
    marginTop: 15,
    textAlign: "center",
    fontWeight: "bold",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  dividerText: {
    color: "#fff",
    marginHorizontal: 10,
    fontWeight: "bold",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#fff",
  },
  socialIcons: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
  },
  iconButton: {
    backgroundColor: "#c93434",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
});
