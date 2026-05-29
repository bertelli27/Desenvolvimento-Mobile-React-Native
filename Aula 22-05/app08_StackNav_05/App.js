import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/telas/Home';

import Brasil from './src/telas/Brasil';

import Argentina from './src/telas/Argentina';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Copa do Mundo',
            headerStyle: {
              backgroundColor: '#06402B'
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen
          name="Brasil"
          component={Brasil}
          options={{
            title: 'Seleção Brasileira',
            headerStyle: {
              backgroundColor: '#06402B'
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen
          name="Argentina"
          component={Argentina}
          options={{
            title: 'Seleção Argentina',
            headerStyle: {
              backgroundColor: '#06402B'
            },
            headerTintColor: '#fff'
          }}
        />

      </Stack.Navigator>

    </NavigationContainer>

  );

}