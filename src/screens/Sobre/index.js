import { DefaultTheme } from "@react-navigation/native";
import React from "react";

import { View, Text } from "react-native";

export default function Sobre({ route }){
    return (
        <View>
            <Text>
                Desenvolvido por { route.params?.nome }
            </Text>
        </View>
    )
}