import { DefaultTheme, useNavigation } from "@react-navigation/native";
import React from "react";

import { View, Text, Image } from "react-native";

import { Box, VStack, Center } from 'native-base'

import FooterMenu from "../../components/FooterMenu";
import CardTitle from "../../components/CardTitle";

export default function GeradorSoteio(){
    return (
        <View style={{ flex: 1 }}>
            <Center>
                <CardTitle title="Gerador de  sorteios" subtitle="Os números são gerados de maneira aleatória, evitando as sequencias já sorteadas." />
                <Box
                    bg="primary.500"
                    mt="1/6"
                    marginBottom="2.5"
                    _text={{
                        fontSize: "md",
                        fontWeight: "medium",
                        color: "warmGray.50",
                        letterSpacing: "lg",
                    }}
                >
                    This is a Box
                </Box>
            </Center>

            <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                <FooterMenu />
            </View>
        </View>
    )
}