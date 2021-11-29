
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";


import {
    Button,
    Divider,
    Heading,
    Modal,
    VStack,
    ScrollView,
    Center,
    Input,
    FormControl,
    NativeBaseProvider,
} from "native-base"

import { MaterialCommunityIcons, MaterialIcons, Fontisto } from '@expo/vector-icons';
// import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import Home from "./screens/Home";
import Estatisticas from "./screens/Estatisticas";
import Perfil from "./screens/Perfil";
import MegaSena from "./screens/MegaSena";
import LotoFacil from './screens/LotoFacil';
import LotoMania from './screens/LotoMania';
import Quina from './screens/Quina';
import GeradorSoteio from './screens/GeradorSorteio';
import UltimosResultados from './screens/UltimosResultados';
import NumerosSorte from './screens/NumerosSorte';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

let Stack = createStackNavigator();





function ModalBasic() {
    const [showModal, setShowModal] = useState(false)
    const navigation = useNavigation();
    function checkState() {
        setShowModal(!showModal);
    }
    return (
        <>
            <Modal isOpen={!showModal} onClose={() => { checkState(), navigation.goBack() }}>
                <Modal.Content maxWidth="400px">
                    <Modal.CloseButton />
                    <Modal.Header textAlign="center" >Menu</Modal.Header>
                    <Modal.Body>
                        <Button size="sm" onPress={() => { navigation.navigate('Gerador'), checkState() }} variant="outline" colorScheme="darkBlue">Gerador de sorteios</Button>
                        <Divider my="2" />
                        <Button size="sm" onPress={() => { navigation.navigate('Resultados'), checkState() }} variant="outline" colorScheme="darkBlue">Últimos resultados</Button>
                        <Divider my="2" />
                        <Button size="sm" onPress={() => { navigation.navigate('NumerosSorte'), checkState() }} variant="outline" colorScheme="darkBlue">Meus números da sorte</Button>
                        <Divider my="2" />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button.Group space={2}>
                            <Button
                                colorScheme="error"
                                onPress={() => { checkState(), navigation.goBack() }}>
                                Fechar
                            </Button>
                        </Button.Group>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
        </>
    )
}


function StackMenu() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="MegaSena" component={MegaSena} />
            <Stack.Screen name="LotoFacil" component={LotoFacil} />
            <Stack.Screen name="LotoMania" component={LotoMania} />
            <Stack.Screen name="Quina" component={Quina} />
            <Stack.Screen name="Gerador" component={GeradorSoteio} />
            <Stack.Screen name="Perfil" component={Perfil} />
            <Stack.Screen name="Resultados" component={UltimosResultados} />
            <Stack.Screen name="Estatisticas" component={Estatisticas} />
            <Stack.Screen name="NumerosSorte" component={NumerosSorte} />
        </Stack.Navigator>
    )
}


const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#b55031',
                inactiveTintColor: '#a8a29e',
                activeBackgroundColor: '#262626',
                inactiveBackgroundColor: '#171717',
                style: {
                    backgroundColor: '#0000',
                    paddingBottom: 3
                }
            }}
            initialRouteName="Home"
            activeColor="#00000"
            inactiveColor="#98989"
            screenOptions={{
                tabBarActiveTintColor: '#fff',
            }}>
            <Tab.Screen
                name="Home"
                component={StackMenu}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Menu"
                component={ModalBasic}
                options={({ navigation }) => ({
                    tabBarLabel: 'Menu',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="menu" size={size} color={color} />
                    ),
                })}
            />
            <Tab.Screen
                name="Estatisticas"
                component={Estatisticas}
                options={{
                    tabBarLabel: 'Estatisticas',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="insert-chart-outlined" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}