import React from "react"
import { ActivityIndicator, View } from "react-native"

import { loadingIndicatorStyle } from "styles"

const blue = "#00f"

const LoadingIndicator = () => (
  <View style={loadingIndicatorStyle}>
    <ActivityIndicator size="large" color={blue} />
  </View>
)

export default LoadingIndicator
