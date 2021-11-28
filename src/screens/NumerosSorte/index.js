import { DefaultTheme } from "@react-navigation/native";
import React from "react";

import { View, Text, Image } from "react-native";

import FooterMenu from "../../components/FooterMenu";

export default function NumerosSorte({ navigation }) {
    return (
        <View style={{ flex: 1 }}>
            <Text>
            Meus Numeros da Sorte
            </Text>
            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                <FooterMenu />
            </View>
        </View>
    )
}