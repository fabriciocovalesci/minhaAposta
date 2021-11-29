import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet } from "react-native";

import { Pressable, VStack, Center } from 'native-base';

import CardTitle from "../../components/CardTitle";

export default function Home({ route }) {
    const navigation = useNavigation()
    return (
        <View>
            <Center>

                <CardTitle title="Minha Aposta" subtitle="Aplicativo mobile para gerenciar suas apostas na loteria da Caixa." />
            </Center>

            <VStack mt="4" space={2} alignItems="center">

                <Pressable
                    onPress={() =>{
                        console.log(route),
                        navigation.navigate('MegaSena')}}
                >
                    <Center w="64" _text={{
                        color: "white",
                        fontWeight: "bold",
                    }} h="10" bg="primary.500" rounded="md" shadow={3} >Mega Sena</Center>
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('LotoFacil')}
                >
                    <Center w="64" _text={{
                        color: "white",
                        fontWeight: "bold",
                    }} h="10" bg="primary.500" rounded="md" shadow={3} >Loto Fácil</Center>
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('LotoMania')}
                >
                    <Center w="64" _text={{
                        color: "white",
                        fontWeight: "bold",
                    }} h="10" bg="primary.500" rounded="md" shadow={3} >Loto Mania</Center>
                </Pressable>

                <Pressable
                    onPress={() => navigation.navigate('Quina')}
                >
                    <Center w="64" _text={{
                        color: "white",
                        fontWeight: "bold",
                    }} h="10" bg="primary.500" rounded="md" shadow={3} >Quina</Center>
                </Pressable>
            </VStack>
        </View>
    )
}

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        flexDirection: "row"
    },
    container: {
        flex: 1,
        flexDirection: "row",
    },
    card_template: {
        // flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: '#303F9F',
        borderRadius: 10,
        width: "90%",
        height: 250,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25,
    },
    cards: {
        flexDirection: "row"
    }
});