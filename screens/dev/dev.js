import React from "react";
import { Text, View, Image, TouchableOpacity, Linking, ScrollView } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import style from "./style.js";

export default function Dev({ navigation }) {
  return (
    <View style={style.container}>
        <View style={[style.devInfo, {marginTop: 40}]}>
          <View style={style.iconContainer}>
            <Image
              style={style.icon}
              source={require('../../assets/eu.jpg')}
            />
          </View>

            <Text style={style.devDesc}>Desenvolvido por</Text>
            <Text style={style.devName}>Marina Oliveira</Text>

            <View>
              <View style={style.containerSocial}>
                <TouchableOpacity
                  style={style.botaoSocial}
                  activeOpacity={0.6}
                  onPress={() => Linking.openURL('https://github.com/m-arina')}
                >
                  <MaterialCommunityIcons name="github" size={32} color="#006FCB" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={style.botaoSocial}
                  activeOpacity={0.6}
                  onPress={() => Linking.openURL('https://www.linkedin.com/in/marina-oliveira-7653041b8/')}
                >
                  <MaterialCommunityIcons name="linkedin" size={32} color="#006FCB" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={style.botaoSocial}
                  activeOpacity={0.6}
                  onPress={() => Linking.openURL('https://instagram.com/_marinaliz')}
                >
                  <MaterialCommunityIcons name="instagram" size={32} color="#006FCB" />
                </TouchableOpacity>
              </View>
            </View>
        </View>

        <Text style={{color:'#B7B7B7', fontSize: 16, marginTop: 10, textAlign: 'center'}}>© Copyright - 2022</Text>
    </View>
  );
}