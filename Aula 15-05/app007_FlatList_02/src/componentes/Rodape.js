import { Image, View, Text } from 'react-native';
import estilos from '../styleSheet/estilos';

const imagemTopo = require('../imagens/band.jpg');

export default function Rodape() {
  return (
    <View style={estilos.rodape}>
      <Image source={imagemTopo} style={estilos.rodapeImagem} resizeMode="contain" />
      <View style={estilos.rodapeTextoContainer}>
        <Text style={estilos.rodapeTexto}>Geovanni & Bruno</Text>
        <Text style={estilos.rodapeTexto}>15/05/2026</Text>
      </View>
    </View>
  );
}
