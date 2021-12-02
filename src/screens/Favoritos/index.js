import { DefaultTheme } from "@react-navigation/native";
import React, { useState } from "react";

import {
    FormControl,
    Input,
    Stack,
    Text,
    TextArea,
    TextField,
    Divider,
    Box,
    WarningOutlineIcon,
    Center,
    NumberInput,
    NativeBaseProvider,
    Button,
  } from "native-base"
  import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view"

  import AsyncStorageMega from "@react-native-async-storage/async-storage";

let loteria = {
    "loteria": [
        {
            "megasena": [
                {
                    "id": "",
                    "nome": "",
                    "descricao": "",
                    "numeros": []
                }
            ]
        },
        {
            "lotofacil": [
                {
                    "id": "",
                    "nome": "",
                    "descricao": "",
                    "numeros": []
                }
            ]
        },
        {
            "lotomania": [
                {
                    "id": "",
                    "nome": "",
                    "descricao": "",
                    "numeros": []
                }
            ]
        },
        {
            "quina": [
                {
                    "id": "",
                    "nome": "",
                    "descricao": "",
                    "numeros": []
                }
            ]
        }
    ]
}


  async function getMega(){
      try {
        return await AsyncStorageMega.getItem('megasena')
      } catch (error) {
          console.error(error)
      }
  }

  async function setMega (value){
      try {

        let megaItem = await getMega()
        megaItem = JSON.parse(megaItem)
        console.log(megaItem)
        if(megaItem.indexOf('id') > -1){

        }
        // console.log('antes ', megaItem)
        // if(megaItem !== null && megaItem !== undefined && megaItem){
        //     megaItem = JSON.parse(megaItem)
        //     megaItem = megaItem.concat(value)
        //     let jsonMega = JSON.stringify(megaItem)
        //     await AsyncStorageMega.setItem('megasena', jsonMega)
        // }
        // await AsyncStorageMega.setItem('megasena', JSON.stringify(value))
        // console.log('ops 2', await getMega())
      } catch (error) {
          console.error(error)
      }
  }


export default function Favoritos({ navigation }) {

    const [numero, setNumber] = useState(null)
    const [numfavoritoMega, setNumberMega] = useState({ id: '', nome: '', descricao: '', loteria: [] });
    const [numfavoritoFacil, setNumberFacil] =  useState({ id: '', nome: '', descricao: '', lotofacil: [] });
    const [numfavoritoMania, setNumberMania] =  useState({ id: '', nome: '', descricao: '', lotomania: [] });
    const [numfavoritoQuina, setNumberQuina] =  useState({ id: '', nome: '', descricao: '', quina: []});

   async function splitNumber(number){
        let array = numero.replace(/^\s+|\s+$/g, '').split(/\s+/);
        setNumberMega({id: Date.now(), nome: 'minha mega', descricao: 'jogando', loteria: array})
        console.log(numfavoritoMega)
        await setMega(numfavoritoMega)
    }

        return (
            <KeyboardAwareScrollView
            style={{
              width: "90%",
            }}
          >
              <Center>
                  <Button >Mega Sena</Button>
              </Center>
              <Center>
                  <Button >Loto Fácil</Button>
              </Center>
              <Center>
                  <Button >Loto Mania</Button>
              </Center>
              <Center>
                  <Button >Quina</Button>
              </Center>

            <TextArea onChangeText={(n) => setNumber(n)} value={numero}/>

            <Text>{numero}</Text>

            <Button onPress={splitNumber} >Salvar</Button>


            {/* <Stack
              space={2.5}
              alignSelf="center"
              px="4"
              safeArea
              mt="4"
              w={{
                base: "100%",
                md: "25%",
              }}
            >
              <Box>
                <Text bold fontSize="xl" mb="4">
                  Cadastrar números
                </Text>
                <FormControl mb="5">
                  <FormControl.Label>Project Title</FormControl.Label>
                  <Input placeholder="Adicionar números"  variant="unstyled" />
                  <FormControl.HelperText>
                    Give your project a title.
                  </FormControl.HelperText>
                  <NumberInput />
                </FormControl>
                <Divider />
              </Box>


            </Stack> */}
          </KeyboardAwareScrollView>
        )
}