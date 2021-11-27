import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NativeBaseProvider } from 'native-base';

import Home from './src/screens/Home';
import Sobre from './src/screens/Sobre';

import MegaSena from './src/screens/MegaSena';
import LotoFacil from './src/screens/LotoFacil';
import LotoMania from './src/screens/LotoMania';
import Quina from './src/screens/Quina';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

let Stack = createStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>


   <NavigationContainer initialRouteName="Sobre">
     <Stack.Navigator>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: "Minha Aposta",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#ffff"
        }}
        />
        <Stack.Screen name="Sobre" component={Sobre} />
        <Stack.Screen name="MegaSena" component={MegaSena} />
        <Stack.Screen name="LotoFacil" component={LotoFacil} />
        <Stack.Screen name="LotoMania" component={LotoMania} />
        <Stack.Screen name="Quina" component={Quina} />
     </Stack.Navigator>
   </NavigationContainer>
   </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
