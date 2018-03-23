import React from "react"
import { ActivityIndicator, View } from "react-native"

const blue = "#00f"

const wrapperStyle = {
  justifyContent: "center",
  height: "100%",
}
const LoadingIndicator = () => (
  <View style={wrapperStyle}>
    <ActivityIndicator size="large" color={blue} />
  </View>
)

export default LoadingIndicator
