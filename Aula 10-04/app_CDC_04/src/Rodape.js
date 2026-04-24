import React from 'react';
import { View, Text, Image } from 'react-native';
import estilos from './stylesheet/estilos';

export default function Rodape() {
  return (
    <View style={estilos.rodape}>

      <Text style={estilos.textoRodape}>
        Receba nosso informativo gratuitamente
      </Text>

      <View style={estilos.icones}>

        <Image 
          source={require('../img/whatsapp.png')} 
          style={estilos.icone} 
        />

        <Image 
          source={require('../img/email.png')} 
          style={estilos.icone} 
        />

        <Image 
          source={require('../img/telegram.png')} 
          style={estilos.icone} 
        />

      </View>

    </View>
  );
}
