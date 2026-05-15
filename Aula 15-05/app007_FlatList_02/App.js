import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Conteudo from './src/componentes/Conteudo';

export default function App() {
  return (
    <View style={styles.container}>
      <Conteudo />
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
  },
});
