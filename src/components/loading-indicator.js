import React from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"

const blue = "#00f"

const style = StyleSheet.create({
  wrapper: {
    height: 300,
    justifyContent: "center",
    alignItems: "center"
  }
})

const LoadingIndicator = () => (
  <View style={style.wrapper}>
    <ActivityIndicator size="large" color={blue} />
  </View>
)

export default LoadingIndicator
