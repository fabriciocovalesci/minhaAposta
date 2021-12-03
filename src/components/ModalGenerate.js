import React, { useState } from "react";
import { Button, Text, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";

function ModalTester(props) {
  const [isModalVisible, setModalVisible] = useState(false);


  console.log("modal ", props)
//   isModalVisible = props.isActive;


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Modal isVisible={props.isActive}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        shadowColor: "#ff34"
    },



})

export default ModalTester;