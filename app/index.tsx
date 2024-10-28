import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  Pressable,
  Alert,
} from "react-native";
import logo from "../assets/images/logo.png";
import { colors } from "../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";

export default function Index() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null); 
  const router = useRouter();

  const validateEmail = (email: string): boolean => {  
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
  };

  const handleLogin = () => {
    // Validação básica do email e senha
    if (!validateEmail(email)) {
      setError("Digite um email válido."); 
      return;
    }
    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    // Dados para simulação
    const mockEmail = "usuario@exemplo.com";
    const mockPassword = "senha123";

    // Verificação de credenciais
    if (email === mockEmail && password === mockPassword) {
      setError(null); 
      Alert.alert("Login bem-sucedido!");
      router.push("/(tabs)"); 
    } else {
      setError("Credenciais inválidas. Verifique e tente novamente.");
    }
  };

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <View style={style.circle}>
          <Image source={logo} style={style.logo} resizeMode="contain" />
          <Text style={style.title}>Login</Text>
        </View>
      </View>
      <View style={style.boxMid}>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            placeholder="Digite seu e-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <MaterialIcons name="email" size={20} color={colors.escuro} />
        </View>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            placeholder="Digite sua senha"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <MaterialIcons name="lock" size={20} color={colors.escuro} />
        </View>
        {error && <Text style={style.errorText}>{error}</Text>}
      </View>
      <View style={style.boxBottom}>
        <Link href="/recover" asChild>
          <Text style={style.text}> Esqueceu a senha? </Text>
        </Link>
        <View>
          <Pressable style={style.btn} onPress={handleLogin}>
            <Text style={style.btntext}>Entrar</Text>
          </Pressable>
        </View>
        <Text style={style.text2}>
          Ainda não possui uma conta?{" "}
          <Link href="/register" asChild>
            <Text style={style.register}>Registre-se</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
  boxTop: {
    height: 200,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  circle: {
    backgroundColor: colors.cinza,
    borderRadius: 500 / 2,
    width: 507,
    height: 507,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
  },
  logo: {
    marginTop: 200,
    width: 300,
    height: 200,
  },
  title: {
    fontWeight: "bold",
    color: "#404040",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,
    fontSize: 30,
  },
  boxMid: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },
  boxInput: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    flexDirection: "row",
    marginTop: 30,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 35,
    backgroundColor: colors.cinza,
  },
  input: {
    height: "100%",
    width: "100%",
    borderRadius: 40,
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 10,
  },
  boxBottom: {
    height: Dimensions.get("window").height / 3,
    width: "100%",
  },
  text: {
    fontWeight: "bold",
    textAlign: "right",
    paddingHorizontal: 40,
  },
  btn: {
    backgroundColor: colors.escuro,
    width: "50%",
    height: 40,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    shadowColor: colors.escuro,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  btntext: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  text2: {
    textAlign: "right",
    marginTop: 20,
    paddingHorizontal: 20,
  },
  register: {
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
