import { Image, View, Text } from 'react-native';
import estilos from '../styleSheet/estilos';

const imagemTopo = require('../imagens/band.jpg');

export default function Cabecalho() {
  return (
    <View style={estilos.cabecalho}>
      <Image source={imagemTopo} style={estilos.cabecalhoImagem} resizeMode="contain" />
      <Text style={estilos.titulo}>Países</Text>
    </View>
  );
}
