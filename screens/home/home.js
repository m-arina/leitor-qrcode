import React from "react";
import {Text, View, TouchableOpacity, Image } from "react-native";
import style from "./style.js";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <View style={style.container}>

      <View style={style.titulo}>
        <Text style={style.destaque}>Conheça a Coqueluche.</Text>
      </View>
      
      <View style={style.conteudo}>
        <Image
          style={style.ilustracao}
          source={require('../../assets/bebe.png')}
        />
        <Text style={{fontWeight: '700', textAlign: 'center', fontSize: 28, color: 'white', marginTop: 10}}>Tenha cuidado com{"\n"} as crianças!</Text> 
        <Text style={style.corpo}>A coqueluche é uma doença infecciosa respiratória, transmissível 
        e causada por uma bactéria. Está presente em todo o mundo e é especialmente perigosa para bebês.
        Atingindo principalmente crianças menores de seis meses de idade.
        </Text>
      </View>

    </View>

  );
}