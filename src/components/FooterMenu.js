
import React from 'react';
import { useNavigation } from '@react-navigation/native'

import {
  NativeBaseProvider,
  Box,
  Text,
  Button,
  Actionsheet,
  useDisclose,
  Icon,
  HStack,
  Center,
  Pressable,
} from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { View } from 'native-base';

export default function FooterMenu() {
  const [selected, setSelected] = React.useState(1);
  const { isOpen, onOpen, onClose } = useDisclose()
  const navigation = useNavigation()
  return (
    <NativeBaseProvider>
      <View>
        <Box flex={1} bg="white" safeAreaTop>
          <Center flex={1}></Center>
          <HStack bg="muted.900" alignItems="center" safeAreaBottom shadow={6}>
            <Pressable
              cursor="pointer"
              opacity={selected === 0 ? 1 : 0.5}
              py="3"
              flex={1}
              onPress={() => {
                setSelected(0),
                  navigation.navigate('Home')
              }}>
              <Center>
                <Icon
                  mb="1"
                  as={
                    <MaterialCommunityIcons
                      name={selected === 0 ? 'home' : 'home-outline'}
                    />
                  }
                  color="white"
                  size="sm"
                />
                <Text color="white" fontSize="12">
                  Home
                </Text>
              </Center>
            </Pressable>

            <Pressable
              cursor="pointer"
              opacity={selected === 1 ? 1 : 0.6}
              py="2"
              flex={1}
              onPress={() => {
                setSelected(1),
                  onOpen()
              }}
            >
              <Actionsheet isOpen={isOpen} onClose={onClose} hideDragIndicator>
                <Actionsheet.Content borderTopRadius="0">
                  <Box w="100%" h={60} px={4} justifyContent="center">
                    <Text
                      fontSize="16"
                      color="gray.500"
                      _dark={{
                        color: "gray.300",
                      }}
                    >
                      Albums
                    </Text>
                  </Box>
                  <Actionsheet.Item>
                    <Button onPress={() => {
                      navigation.navigate("Gerador"),
                        onClose()
                    }}>Gerador de Sorteios</Button>
                  </Actionsheet.Item>
                  <Actionsheet.Item>
                    <Button onPress={() => {
                      navigation.navigate("Resultados"),
                        onClose()
                    }}>
                      Últimos Resultados
                    </Button>
                  </Actionsheet.Item>
                  <Actionsheet.Item>
                    <Button onPress={() => {
                      navigation.navigate("NumerosSorte"),
                        onClose()
                    }}>
                      Meus números da sorte</Button>
                  </Actionsheet.Item>
                  <Actionsheet.Item>
                    <Button onPress={onClose}>Cancelar</Button>
                  </Actionsheet.Item>
                </Actionsheet.Content>
              </Actionsheet>
              <Center>
                <Icon
                  mb="1"
                  as={
                    <MaterialCommunityIcons
                      name={selected === 2 ? 'menu-open' : 'menu'}
                    />
                  }
                  color="white"
                  size="sm"
                />
                <Text color="white" font="12">
                  Menu
                </Text>
              </Center>
            </Pressable>

            <Pressable
              cursor="pointer"
              opacity={selected === 2 ? 1 : 0.5}
              py="2"
              flex={1}
              onPress={() => {
                setSelected(2),
                  navigation.navigate("Estatisticas")
              }}
            >
              <Center>
                <Icon
                  mb="1"
                  as={<MaterialIcons name="insert-chart-outlined" />}
                  color="white"
                  size="sm"
                />
                <Text color="white" fontSize="12">
                  Estatísticas
                </Text>
              </Center>
            </Pressable>

            <Pressable
              cursor="pointer"
              opacity={selected === 3 ? 1 : 0.5}
              py="2"
              flex={1}
              onPress={() => {
                setSelected(3),
                  navigation.navigate("Perfil")
              }}
            >
              <Center>
                <Icon
                  mb="1"
                  as={
                    <MaterialCommunityIcons
                      name={selected === 3 ? 'account' : 'account-outline'}
                    />
                  }
                  color="white"
                  size="sm"
                />
                <Text color="white" fontSize="12">
                  Perfil
                </Text>
              </Center>
            </Pressable>
          </HStack>
        </Box>
      </View>
    </NativeBaseProvider>
  );
}

