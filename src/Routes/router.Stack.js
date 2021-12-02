
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../screens/Home";
import MegaSena from "../screens/MegaSena";
import LotoFacil from '../screens/LotoFacil';
import LotoMania from '../screens/LotoMania';
import Quina from '../screens/Quina';
import GeradorSoteio from '../screens/GeradorSorteio';
import UltimosResultados from '../screens/UltimosResultados';
import Favoritos from '../screens/Favoritos'


let Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MegaSena" component={MegaSena} />
        <Stack.Screen name="LotoFacil" component={LotoFacil} />
        <Stack.Screen name="LotoMania" component={LotoMania} />
        <Stack.Screen name="Quina" component={Quina} />
        <Stack.Screen name="Gerador" component={GeradorSoteio} />
        <Stack.Screen name="Resultados" component={UltimosResultados} />
        <Stack.Screen name="Favoritos" component={Favoritos} />
    </Stack.Navigator>
);

export default StackNavigator;