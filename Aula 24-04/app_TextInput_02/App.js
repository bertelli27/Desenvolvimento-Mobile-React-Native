import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';

export default function App() {

  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [senha, setSenha] = useState('');
  const [obs, setObs] = useState('');

  const [mostrar, setMostrar] = useState(false);

  function enviarDados() {

    if (nome === '' || email === '') {
      alert('Preencha Nome e Email!');
      return;
    }

    setMostrar(true);
  }

  return (
    <ScrollView style={styles.container}>

      {/* CABEÇALHO */}
      <View style={styles.cabecalho}>
        <Text style={styles.titulo}>
          Cadastro de Usuário
        </Text>

        <Text style={styles.subtitulo}>
          Preencha suas informações
        </Text>
      </View>

      {/* FORMULÁRIO */}
      <View style={styles.conteudo}>

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder="Idade"
          keyboardType="numeric"
          onChangeText={setIdade}
        />

        <TextInput
          style={styles.input}
          placeholder="CPF"
          keyboardType="numeric"
          onChangeText={setCpf}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Celular"
          keyboardType="phone-pad"
          onChangeText={setCelular}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          secureTextEntry={true}
          onChangeText={setSenha}
        />

        <TextInput
          style={styles.textarea}
          placeholder="Observações"
          multiline={true}
          numberOfLines={4}
          onChangeText={setObs}
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={enviarDados}
        >
          <Text style={styles.textoBotao}>
            Enviar Dados
          </Text>
        </TouchableOpacity>

        {/* RESULTADO */}
        {mostrar && (
          <View style={styles.resultadoBox}>
            <Text style={styles.resultadoTitulo}>Dados Informados:</Text>

            <Text>Nome: {nome}</Text>
            <Text>Idade: {idade}</Text>
            <Text>CPF: {cpf}</Text>
            <Text>Email: {email}</Text>
            <Text>Celular: {celular}</Text>
            <Text>Observações: {obs}</Text>
          </View>
        )}

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },

  cabecalho: {
    backgroundColor: '#253D2C',
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },

  subtitulo: {
    fontSize: 14,
    color: '#ccc'
  },

  conteudo: {
    padding: 20
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff'
  },

  textarea: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
    height: 100,
    textAlignVertical: 'top'
  },

  botao: {
    backgroundColor: '#253D2C',
    padding: 14,
    alignItems: 'center',
    borderRadius: 10,
    marginTop: 10
  },

  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  },

  resultadoBox: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3
  },

  resultadoTitulo: {
    fontWeight: 'bold',
    marginBottom: 5
  }

});
