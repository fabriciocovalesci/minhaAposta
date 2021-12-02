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
                        <Button size="sm" onPress={() => { navigation.navigate('Favoritos'), checkState() }} variant="outline" colorScheme="darkBlue">Meus números da sorte</Button>
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