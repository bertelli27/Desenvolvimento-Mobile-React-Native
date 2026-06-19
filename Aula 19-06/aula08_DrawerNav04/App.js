import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import TabRoutes from "./src/TabRoutes";
import Jogos from "./src/Telas/Jogos";
import Classificacao from "./src/Telas/Classificacao";
import StackClubes from "./src/StackClubes";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Início">
        {/* Rota principal: Tabs (que por sua vez tem o Stack dentro da aba Clubes) */}
        <Drawer.Screen name="Início" component={TabRoutes} />

        {/* As mesmas telas também acessíveis direto pelo Drawer */}
        <Drawer.Screen name="Clubes" component={StackClubes} options={{ headerShown: false }} />
        <Drawer.Screen name="Jogos" component={Jogos} />
        <Drawer.Screen name="Classificacao" component={Classificacao} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}