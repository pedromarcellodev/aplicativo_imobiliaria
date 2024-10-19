import React from 'react';
import {Text, View,TextInput, StyleSheet, TouchableOpacity, Image,} from 'react-native';
import AntDesign from "@expo/vector-icons/AntDesign";
import { colors } from "../../constants/Colors";

export default function Search() {
  return (
    <View style={style.container}>

      <View style={style.box}>
        <View style={style.boxInput}>
          <TextInput style={style.input} placeholder="O que você está procurando?" />
          <TouchableOpacity>
            <AntDesign name="search1" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.barra} />

      <View style={style.linha}>
          <View style={style.caixa}>
            <View style={style.imagemContainer}>
              <Image
                source={require("../../assets/images/imovel_2.jpg")}
                style={style.imagemCategoria}
              />
              <View style={style.overlay2} />
            </View>
            <Text style={style.textoCaixaAbaixo}>Comprar Apt</Text>
          </View>

          <View style={style.caixa}>
            <View style={style.imagemContainer}>
              <Image
                source={require("../../assets/images/imovel_2.jpg")}
                style={style.imagemCategoria}
              />
              <View style={style.overlay2} />
            </View>
            <Text style={style.textoCaixaAbaixo}>Comprar Casas</Text>
          </View>

          <View style={style.caixa}>
            <View style={style.imagemContainer}>
              <Image
                source={require("../../assets/images/imovel_1.jpg")}
                style={style.imagemCategoria}
              />
              <View style={style.overlay2} />
            </View>
            <Text style={style.textoCaixaAbaixo}>Alugar Casas</Text>
          </View>
      </View>

      <View style={style.linha}>
          <View style={style.caixa}>
            <View style={style.imagemContainer}>
              <Image
                source={require("../../assets/images/imovel_1.jpg")}
                style={style.imagemCategoria}
              />
              <View style={style.overlay2} />
            </View>
            <Text style={style.textoCaixaAbaixo}>Alugar Apt</Text>
          </View>
          <View style={style.caixa}>
            <View style={style.imagemContainer}>
              <Image
                source={require("../../assets/images/imovel_1.jpg")}
                style={style.imagemCategoria}
              />
              <View style={style.overlay2} />
            </View>
            <Text style={style.textoCaixaAbaixo}>Chalés</Text>
          </View>
          <View style={style.caixa}>
            <View style={style.imagemContainer}>
              <Image
                source={require("../../assets/images/imovel_1.jpg")}
                style={style.imagemCategoria}
              />
              <View style={style.overlay2} />
            </View>
            <Text style={style.textoCaixaAbaixo}>Terrenos</Text>
          </View>
      </View>

    </View>
    

    
  );
}

const style = StyleSheet.create({

  container:{
    flex:1,
    marginTop:50
  },
  
  box:{
    height: 70,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  boxInput: {
    width: "90%",
    height: 40,
    borderWidth: 1,
    borderRadius: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 35,
    backgroundColor: colors.cinza,
  },

  input: {
    height: "100%",
    width: "100%",
    borderRadius: 40,
  },

  barra: {
    width: "90%",
    height: 7,
    backgroundColor: colors.escuro,
    marginVertical: 15,
    marginStart:20,
    alignContent: "center",
    alignItems: "center",
  },

  linha: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
    marginStart:20,
  },
  caixa: {
    width: "30%",
    height: 100,
    backgroundColor: colors.cinza,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    position: "relative",
    elevation: 5,
  },
  imagemContainer: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  imagemCategoria: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  overlay2: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    borderRadius: 10,
  },
  textoCaixaAbaixo: {
    position: "absolute",
    bottom: 5,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingVertical: 10,
    borderRadius: 5,
  },

});