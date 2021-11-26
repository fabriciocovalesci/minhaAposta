import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './src/screens/Home';
import Sobre from './src/screens/Sobre';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

let Stack = createStackNavigator();

export default function App() {
  return (
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
     </Stack.Navigator>
   </NavigationContainer>
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
