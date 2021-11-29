
import React from 'react';

import { NativeBaseProvider } from 'native-base';

import Home from './src/screens/Home';
import Sobre from './src/screens/Sobre';
import MegaSena from './src/screens/MegaSena';
import LotoFacil from './src/screens/LotoFacil';
import LotoMania from './src/screens/LotoMania';
import Quina from './src/screens/Quina';
import GeradorSoteio from './src/screens/GeradorSorteio';
import Perfil from './src/screens/Perfil';
import Estatisticas from './src/screens/Estatisticas';
import UltimosResultados from './src/screens/UltimosResultados';
import NumerosSorte from './src/screens/NumerosSorte'

import Routes from './src/routes';

import { NavigationContainer } from '@react-navigation/native'


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}