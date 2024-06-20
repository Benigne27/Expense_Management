import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

export default function Input({placeholder, icon, secureTextEntry}) {
  return (
    <View>
      <TextInput
        style={styles.Input}
        theme={{ roundness: 40, colors: { primary: "transparent" } }}
        underlineColor="transparent"
        placeholder={placeholder}
        placeholderTextColor={'white'}
        textColor="white"
        cursorColor="#69AEA9"
        clearTextOnFocus={true}
        right={<TextInput.Icon icon={icon} color={'white'}/>}
        keyboardType="email-address"
        secureTextEntry={secureTextEntry}

      />
      <View style={{height:30}}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    width: 350,
    height: 70,
    borderColor: "white",
    borderWidth: 2,
    backgroundColor: "transparent",
    borderRadius: 40,
    fontSize:20,
    fontWeight:'bold',
    paddingHorizontal:20,
    color:'white'
  },
});
