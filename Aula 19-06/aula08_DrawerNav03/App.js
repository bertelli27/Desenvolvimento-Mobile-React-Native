import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabRoutes from "./src/TabRoutes";
import Lutadores from "./src/Telas/Lutadores";
import Eventos from "./src/Telas/Eventos";
import Categorias from "./src/Telas/Categorias";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Início (Tabs)">
        {/* Rota principal: as 3 telas via TAB, dentro do Drawer */}
        <Drawer.Screen name="Início" component={TabRoutes} />

        {/* As mesmas telas também acessíveis direto pelo Drawer */}
        <Drawer.Screen name="Lutadores" component={Lutadores} />
        <Drawer.Screen name="Eventos" component={Eventos} />
        <Drawer.Screen name="Categorias" component={Categorias} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}