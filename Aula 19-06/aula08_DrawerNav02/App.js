import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Times from "./src/Telas/Times";
import Jogadores from "./src/Telas/Jogadores";
import Estatisticas from "./src/Telas/Estatisticas";
import Configuracoes from "./src/Telas/Configuracoes";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Times">
        <Drawer.Screen name="Times" component={Times} />
        <Drawer.Screen name="Jogadores" component={Jogadores} />
        <Drawer.Screen name="Estatisticas" component={Estatisticas} />
        <Drawer.Screen name="Configuracoes" component={Configuracoes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}