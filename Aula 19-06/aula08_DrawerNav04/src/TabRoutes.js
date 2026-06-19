import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import StackClubes from "./StackClubes";
import Jogos from "./Telas/Jogos";
import Classificacao from "./Telas/Classificacao";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator initialRouteName="Clubes">
      <Tab.Screen name="Clubes" component={StackClubes} options={{ headerShown: false }} />
      <Tab.Screen name="Jogos" component={Jogos} />
      <Tab.Screen name="Classificacao" component={Classificacao} />
    </Tab.Navigator>
  );
}