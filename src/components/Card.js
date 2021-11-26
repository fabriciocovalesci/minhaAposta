import { DefaultTheme } from "@react-navigation/native";
import React from "react";

import { StyleSheet, View, Text } from "react-native";

export default function Card(props){
    return (
        <View style={styles.container}>
            <View style={styles.card_template}>
                <View style={styles.container_text}>
                    <Text style={styles.text_title}>
                        {props.title}
                    </Text>
                    <Text style={styles.text_subtitle}>
                        {props.subtitle}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      card_template:{
        backgroundColor: '#303F9F',
        borderRadius: 10,
        width: 250,
        height: 150,
        boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
        justifyContent: "center",
        alignItems: "center",
      },
      container_text: {
        justifyContent: 'center',
        alignItems: "center"
      },    
      text_title: {
          fontFamily: "Open Sans",
          color: "#fff",
          fontSize: 22
      },
      text_subtitle:{
        fontFamily: "Open Sans",
        color: "#fff",
        fontSize: 14,
        textAlign: "center",
        padding: 5
      }
  });
  