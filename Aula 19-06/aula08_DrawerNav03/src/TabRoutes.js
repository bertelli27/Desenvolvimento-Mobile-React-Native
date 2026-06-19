import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Lutadores from "./Telas/Lutadores";
import Eventos from "./Telas/Eventos";
import Categorias from "./Telas/Categorias";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator initialRouteName="Lutadores">
      <Tab.Screen name="Lutadores" component={Lutadores} />
      <Tab.Screen name="Eventos" component={Eventos} />
      <Tab.Screen name="Categorias" component={Categorias} />
    </Tab.Navigator>
  );
}