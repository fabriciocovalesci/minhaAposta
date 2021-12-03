import { DefaultTheme, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

import { Button, Text, View, StyleSheet } from "react-native";

import Modal from "react-native-modal";

import {
    Center,
    Divider,
    Flex,
    Box,
    Heading
} from 'native-base'

import CardTitle from "../../components/CardTitle";

export default function GeradorSoteio() {

    function generate(min, max, quantidade){
        let numbers = []
        for (let index = 0; index < quantidade; index++) {
            min = Math.ceil(min);
            max = Math.floor(max);
            let aleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
            if(!numbers.includes(aleatorio)) numbers.push(aleatorio + ' ')
            continue
        }
        return numbers
    }

    const [state, setstate] = useState(false);

    const [loterias, setLoteria] = useState({ nome: '', numeros: '' })

    function toogleModal(props) {
        if(props.loteria !== undefined && props.loteria !== null){
            if(props.loteria === 'megasena'){
                setLoteria({nome: 'Mega Sena', numeros: generate(0, 60, 6)})
                setstate(!state)
            }
            if(props.loteria === 'lotofacil'){
                setLoteria({nome: 'Loto Fácil', numeros: generate(0, 25, 15)})
                setstate(!state)
            }
            if(props.loteria === 'lotomania'){
                setLoteria({nome: 'Loto Mania', numeros: generate(0, 50, 25)})
                setstate(!state)
            }
            if(props.loteria === 'quina'){
                setLoteria({nome: 'Quina', numeros: generate(0, 60, 5)})
                setstate(!state)
            }
        }
    }

    function toogleModalClose(){
        setstate(!state)
    }

    return (
        <View>

            <View style={styles.container}>
                <Modal style={styles.modalContent} isVisible={state}>
                    <View style={{ flex: 1 }}>
                        <Heading m="3" p="1.5" color="blue.600" fontSize="lg">{loterias.nome}</Heading>

                        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", flexDirection: "row", padding: 20, margin: 10}}>
                            <Text>{loterias.numeros}</Text>
                        </View>


                    </View>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", padding: 20, margin: 10, alignSelf: "stretch" }}>
                    <Button style={styles.bottomModal} title="Salvar" onPress={toogleModalClose} />
                    <Button style={styles.bottomModal} title="Cancelar" onPress={toogleModalClose} />
                    </View>
                </Modal>
            </View>

            <CardTitle title="Gerador de  sorteios" subtitle="Os números são gerados de maneira aleatória, evitando as sequencias já sorteadas." />

            <Center px="3" mt="10">
                <Box
                    mt="5"
                    bg="primary.500"
                    p="6"
                    alignItems="center"
                    rounded="xl"
                    w="md"
                >
                    <Heading m="0.5" p="1.5" color="white" fontSize="lg">Selecione a Loteria</Heading>
                    <Box w="160" >
                        <Flex mx="3" direction="row" justify="space-evenly">
                            <Heading fontSize="md" m="1" p="1" onPress={(props) => toogleModal({loteria: 'megasena'})}>MegaSena</Heading>
                            <Divider orientation="vertical" mx="3" />
                            <Heading fontSize="md" m="1" p="1" onPress={(props) => toogleModal({loteria: 'lotofacil'})} >LotoFácil</Heading>
                        </Flex>
                        <Divider my="2" />
                        <Flex mx="3" direction="row" justify="space-evenly">
                            <Heading fontSize="md" m="1" p="1" onPress={(props) => toogleModal({loteria: 'lotomania'})}>LotoMania</Heading>
                            <Divider orientation="vertical" mx="3" />
                            <Heading fontSize="md" m="1" p="1" onPress={(props) => toogleModal({loteria: 'quina'})} >Quina</Heading>
                        </Flex>
                    </Box>
                </Box>
            </Center>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "75%"
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    bottomModal: {
        padding: 20
    },
    textTitle: {
        fontSize: "35",
        padding: '10'
    }



})