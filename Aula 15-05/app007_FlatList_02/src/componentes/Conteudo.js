import { FlatList, Text, View } from 'react-native';
import paises from '../dados/paises.json';
import Cabecalho from './Cabecalho';
import Rodape from './Rodape';
import estilos from '../styleSheet/estilos';

export default function Conteudo() {
  const recuperaId = (item) => item.id;

  const mostrarItem = ({ item }) => (
    <View style={estilos.listaItem}>
      <Text style={estilos.itemPais}>{item.pais}</Text>
      <Text style={estilos.itemCapital}>Capital: {item.capital}</Text>
    </View>
  );

  const mostrarSeparador = () => <View style={estilos.separador} />;

  const mostrarCabecalho = () => (
    <View style={estilos.listaCabecalhoContainer}>
      <Text style={estilos.listaCabecalhoTexto}>Lista de Países e Capitais</Text>
    </View>
  );

  const mostrarRodapeLista = () => (
    <View style={estilos.rodapeLista}>
      <Text style={estilos.rodapeListaTexto}>Total de países: {paises.length}</Text>
    </View>
  );

  const mostrarListaVazia = () => (
    <View style={estilos.listaVaziaContainer}>
      <Text style={estilos.listaVaziaTexto}>Nenhum país disponível.</Text>
    </View>
  );

  return (
    <View style={estilos.conteudo}>
      <Cabecalho />
      <FlatList
        style={estilos.lista}
        contentContainerStyle={estilos.listaConteudo}
        data={paises}
        keyExtractor={recuperaId}
        renderItem={mostrarItem}
        ItemSeparatorComponent={mostrarSeparador}
        ListHeaderComponent={mostrarCabecalho}
        ListFooterComponent={mostrarRodapeLista}
        ListEmptyComponent={mostrarListaVazia}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={1}
      />
      <Rodape />
    </View>
  );
}
