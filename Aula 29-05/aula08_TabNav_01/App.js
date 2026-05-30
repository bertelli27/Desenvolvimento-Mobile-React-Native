import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import PortfolioScreen from './src/screens/PortfolioScreen';
import ContactScreen from './src/screens/ContactScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },

          tabBarStyle: {
            height: 65,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons
                name="home"
                size={24}
                color="#2E7D32"
              />
            ),
          }}
        />

        <Tab.Screen
          name="Portfolio"
          component={PortfolioScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons
                name="person"
                size={24}
                color="#2E7D32"
              />
            ),
          }}
        />

        <Tab.Screen
          name="Contato"
          component={ContactScreen}
          options={{
            tabBarIcon: () => (
              <Ionicons
                name="mail"
                size={24}
                color="#2E7D32"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}