import React from 'react';

import {
  View,
  Text,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#E8F5E9',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <View
        style={{
          width: '100%',
          height: '85%',
          backgroundColor: '#F1F8E9',
          borderRadius: 30,
          borderWidth: 8,
          borderColor: '#0A3314',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 42,
            fontWeight: 'bold',
            color: '#1B5E20',
          }}
        >
          Página Home
        </Text>

        <Text
          style={{
            fontSize: 20,
            marginTop: 20,
            color: '#555',
          }}
        >
          Bem-vindo(a)
        </Text>

        <Text
          style={{
            marginTop: 40,
            fontSize: 18,
            color: '#666',
          }}
        >
          COMPONENTE
        </Text>

        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#2E7D32',
            marginTop: 10,
          }}
        >
          Tab Navigation
        </Text>
      </View>

      <View
        style={{
          width: '100%',
          backgroundColor: '#1B5E20',
          padding: 15,
          borderRadius: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            color: '#fff',
            textAlign: 'center',
            fontSize: 18,
          }}
        >
          Bruno Bertelli • 29/05/2026
        </Text>
      </View>
    </View>
  );
}