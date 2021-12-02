import React, { useState } from "react"
import { useNavigation } from "@react-navigation/core"
import {
    Actionsheet,
    Box,
    Text,
} from "native-base"



const SubMenu = ({ route }) => {
    console.log('veio ?? ', route)

    const navigation = useNavigation()
    const [openModal, setModal] = useState(true)

    function closeModal() {
        if (openModal === true) {
            setModal(!openModal)
            navigation.navigate('Home')
        } else (
            setModal(openModal)
        )
    }

    function GoNavigate(goTo){
        if(goTo === 'cancel') closeModal();
        navigation.navigate(goTo)
        closeModal()
    }

    return (
        <>
            <Actionsheet isOpen={openModal} onClose={closeModal} hideDragIndicator>
                <Actionsheet.Content borderTopRadius="0">
                    <Box w="100%" h={60} px={4} justifyContent="center">
                        <Text
                            fontSize="16"
                            color="gray.500"
                            _dark={{
                                color: "gray.300",
                            }}
                        >
                            Menu
                        </Text>
                    </Box>
                    <Actionsheet.Item onPress={() => GoNavigate('Gerador')}>Gerador de sorteios</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => GoNavigate('Resultados')}>Últimos resultados</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => GoNavigate('Favoritos')}>Meus números da sorte</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => GoNavigate('cancel')}>Cancelar</Actionsheet.Item>
                </Actionsheet.Content>
            </Actionsheet>
        </>
    )
}

export default SubMenu;