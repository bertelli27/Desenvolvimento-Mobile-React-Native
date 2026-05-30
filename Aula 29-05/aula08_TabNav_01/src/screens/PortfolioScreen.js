import React from 'react';

import {
  View,
  Text,
  ScrollView,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

export default function PortfolioScreen() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#E8F5E9',
      }}
    >
      <View
        style={{
          alignItems: 'center',
          marginTop: 40,
        }}
      >
        <Ionicons
          name="person-circle"
          size={120}
          color="#388E3C"
        />

        <Text
          style={{
            fontSize: 35,
            fontWeight: 'bold',
            marginTop: 10,
          }}
        >
          Meu Portfólio
        </Text>
      </View>

      <Text
        style={{
          fontSize: 22,
          fontWeight: 'bold',
          color: '#1B5E20',
          marginLeft: 20,
          marginTop: 30,
          marginBottom: 15,
        }}
      >
        Acadêmicos
      </Text>

      <View
        style={{
          backgroundColor: '#fff',
          marginHorizontal: 20,
          padding: 20,
          borderRadius: 15,
          marginBottom: 15,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
          }}
        >
          ADS
        </Text>

        <Text style={{ marginTop: 10 }}>
          - Desenvolvimento Mobile
        </Text>

        <Text style={{ marginTop: 5 }}>
          - Bruno Bertelli
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#fff',
          marginHorizontal: 20,
          padding: 20,
          borderRadius: 15,
          marginBottom: 30,
        }}
      >
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
          }}
        >
          Engenharia de Software
        </Text>

        <Text style={{ marginTop: 10 }}>
          - Desenvolvimento Mobile
        </Text>

        <Text style={{ marginTop: 5 }}>
          - Geovanni Chaves
        </Text>
      </View>
    </ScrollView>
  );
}