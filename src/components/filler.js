// Invisible filler to offset back button so that title content can be centered.
import React from "react"
import { Text, View } from "react-native"

const fillerStyle = { width: 24 }
const fillerTextStyle = { color: "transparent" }

const Filler = () => (
  <View style={fillerStyle}>
    <Text style={fillerTextStyle}>x</Text>
  </View>
)

export default Filler
