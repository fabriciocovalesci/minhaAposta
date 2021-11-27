import { DefaultTheme } from "@react-navigation/native";
import React from "react";

import { StyleSheet, View, Text, Image } from "react-native";

export default function CardLoteria() {
    return (
        <View style={styles.container}>
            <View style={styles.card_template}>
                <View>
                <Image />
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.loteria}>Mega Sena</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        width: "33.33%",
      },
      card_template:{
        backgroundColor: 'red',
        borderRadius: 10,
        width: "100%",
        height: 100,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 25
      },
      loteria:{
          color: "#fff"
      },
      subTitle:{
        height: 30,
        width: "100%",
        backgroundColor: "#263238",
        // justifyContent: "center",
        alignItems: "center",
        flex: 1,
        justifyContent: 'flex-end',
      },


      bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: '#263238',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute', //Here is the trick
        bottom: 0, //Here is the trick
      },
      textStyle: {
        color: '#fff',
        fontSize: 18,
      },
  });
  