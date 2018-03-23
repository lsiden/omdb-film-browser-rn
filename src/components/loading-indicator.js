import React from "react"
import { ActivityIndicator, View } from "react-native"

import { loadingIndicatorStyles as style } from "styles"

const blue = "#00f"

const LoadingIndicator = () => (
  <View style={style.wrapper}>
    <ActivityIndicator size="large" color={blue} />
  </View>
)

export default LoadingIndicator
