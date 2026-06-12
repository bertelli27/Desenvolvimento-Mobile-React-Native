import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text } from 'react-native';
import Copa2026Screen from './src/screens/Copa2026Screen';
import CampeoesScreen from './src/screens/CampeoesScreen';
import SedesScreen from './src/screens/SedesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        sceneContainerStyle={styles.scene}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarActiveTintColor: '#FFF',
          tabBarInactiveTintColor: '#B8D3EB',
          tabBarIcon: ({ color, size }) => {
            let icon = '🌍';
            if (route.name === 'Campeões') {
              icon = '🏆';
            } else if (route.name === 'Sedes') {
              icon = '📍';
            }
            return <Text style={[styles.tabIcon, { color, fontSize: size }]}>{icon}</Text>;
          },
        })}
      >
        <Tab.Screen name="Copa 2026" component={Copa2026Screen} />
        <Tab.Screen name="Campeões" component={CampeoesScreen} />
        <Tab.Screen name="Sedes" component={SedesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scene: {
    backgroundColor: '#F4F8FF',
  },
  tabBar: {
    backgroundColor: '#186948',
    borderTopColor: 'rgb(9, 92, 79)',
    height: 65,
    paddingBottom: 6,
    paddingTop: 4,
  },
  tabBarLabel: {
    fontSize: 12,
  },
  tabIcon: {
    lineHeight: 24,
  },
});