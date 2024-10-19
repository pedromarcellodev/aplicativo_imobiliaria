import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  Pressable,
} from "react-native";
import logo from "../../assets/images/logo.png";
import { colors } from "../../constants/Colors";
import { MaterialIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";

export default function Register() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <View style={style.circle}>
          <Image source={logo} style={style.logo} resizeMode="contain" />
          <Text style={style.title}>Registro</Text>
        </View>
      </View>
      <View style={style.boxMid}>
        <View style={style.boxInput}>
          <TextInput style={style.input} placeholder="Digite nome" />
          <MaterialIcons name="person" size={20} color={colors.escuro} />
        </View>
        <View style={style.boxInput}>
          <TextInput style={style.input} placeholder="Digite seu e-mail" />
          <MaterialIcons name="email" size={20} color={colors.escuro} />
        </View>
        <View style={style.boxInput}>
          <TextInput style={style.input} placeholder="Digite sua senha" />
          <MaterialIcons name="lock" size={20} color={colors.escuro} />
        </View>
      </View>
      <View style={style.boxBottom}>
        <Link href="/(tabs)" asChild>
          <Pressable style={style.btn}>
            <Text style={style.btntext}>Registrar-se</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
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

  // CONTEUDO DO MEIO
  boxMid: {
    height: 200,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 150,
  },

  titleInput: {
    marginLeft: 5,
    marginTop: 20,
  },
  boxInput: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    flexDirection: "row",
    marginTop: 20,
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

  // FINAL
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
