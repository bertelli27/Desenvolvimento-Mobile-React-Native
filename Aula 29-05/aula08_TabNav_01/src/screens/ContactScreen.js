import React from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ContactScreen() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#E8F5E9',
      }}
    >
      <Text
        style={{
          fontSize: 35,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 50,
        }}
      >
        Entre em Contato
      </Text>

      <View
        style={{
          backgroundColor: '#fff',
          margin: 20,
          padding: 20,
          borderRadius: 15,
        }}
      >
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
          }}
        >
          Informações de Contato
        </Text>

        <Text style={{ marginBottom: 10 }}>
          Celular: (41) 99601-0537
        </Text>

        <Text style={{ marginBottom: 10 }}>
          Email: brunobertelli199@gmail.com
        </Text>

        <Text style={{ marginBottom: 10 }}>
          Instagram: @brunob_rabelo
        </Text>

        <Text style={{ marginBottom: 10 }}>
          Pinhais - PR
        </Text>
      </View>

      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 10,
        }}
      >
        Enviar Mensagem
      </Text>

      <TextInput
        placeholder="Digite seu nome"
        style={{
          backgroundColor: '#fff',
          marginHorizontal: 20,
          marginTop: 20,
          padding: 15,
          borderRadius: 10,
          fontSize: 18,
        }}
      />

      <TextInput
        placeholder="Digite sua mensagem"
        multiline={true}
        numberOfLines={5}
        style={{
          backgroundColor: '#fff',
          marginHorizontal: 20,
          marginTop: 20,
          padding: 15,
          borderRadius: 10,
          fontSize: 18,
          height: 140,
          textAlignVertical: 'top',
        }}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#2E7D32',
          margin: 20,
          padding: 18,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 22,
            fontWeight: 'bold',
          }}
        >
          Enviar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}