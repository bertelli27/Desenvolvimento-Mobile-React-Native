import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Clubes from "./Telas/Clubes";
import DetalhesClube from "./Telas/DetalhesClube";

const Stack = createNativeStackNavigator();

export default function StackClubes() {
  return (
    <Stack.Navigator initialRouteName="Lista de Clubes">
      <Stack.Screen name="Lista de Clubes" component={Clubes} />
      <Stack.Screen name="Detalhes do Clube" component={DetalhesClube} />
    </Stack.Navigator>
  );
}