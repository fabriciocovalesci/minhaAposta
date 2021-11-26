import React from "react";

import { View, Text, Button } from "react-native";

import Card from "../../components/Card";

export default function Home({ navigation }){
    return (
        <View>
            
            <Card title="Minha Aposta" subtitle="Aplicativo mobile para gerenciar suas apostas na loteria da Caixa."/>
            <Text>
                Home
            </Text>
            <Text>
                Home
            </Text>
            <Text>
                Home
            </Text>
            <Button 
            title="Sobre"
            onPress={ () => navigation.navigate('Sobre', { nome: "Fabricio" })}
            />
        </View>
    )
}