import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomePage() {
  return (
    <View>
        <ImageBackground source={require('../assets/HomeTop.png')}></ImageBackground>
     
    </View>
  )
}

const styles = StyleSheet.create({})