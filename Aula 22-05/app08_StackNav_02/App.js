import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/telas/Home';
import GTA6 from './src/telas/GTA6';
import Minecraft from './src/telas/Minecraft';
import EAFC26 from './src/telas/EAFC26';

const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>

      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Tela Principal',
            headerStyle: {
              backgroundColor: '#06402B'
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen
          name="GTA6"
          component={GTA6}
          options={{
            title: 'GTA 6',
            headerStyle: {
              backgroundColor: '#06402B'
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen
          name="Minecraft"
          component={Minecraft}
          options={{
            title: 'Minecraft',
            headerStyle: {
              backgroundColor: '#06402B'
            },
            headerTintColor: '#fff'
          }}
        />

        <Stack.Screen
          name="EAFC26"
          component={EAFC26}
          options={{
            title: 'EA FC 26',
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