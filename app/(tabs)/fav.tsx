import React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import { colors } from "../../constants/Colors";

export default function Fav() {
  return (
    <View style={style.container}>

      <Text style={style.title}>Favoritos</Text>
      <View style={style.barra}/>

      <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Fav Page! 🎉</Text>
      </View>

    </View>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    marginTop:80
  },
  title:{
    fontWeight: "bold",
    color: colors.title,
    fontSize: 30,
    marginStart:10,
  },
  barra: {
    width: "92%",
    height: 7,
    backgroundColor: colors.escuro,
    marginVertical: 10,
    marginStart:10,
  },

});
