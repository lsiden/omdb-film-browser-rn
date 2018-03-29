import React from "react"

import { TouchableHighlight, Image } from "react-native"
import { Icon } from "react-native-elements"

import { primaryColor } from "./styles"

const iconStyle = {
  height: 28,
  width: 28
}
const navOptions = navigation => ({
  title: "Open Movie Database Browser",
  headerLeft: (
    <TouchableHighlight onPress={() => navigation.goBack()}>
      <Image
        source={require("assets/film-reel-48-white-on-primary.png")}
        style={iconStyle}
      />
    </TouchableHighlight>
  ),
  headerRight: (
    <TouchableHighlight onPress={() => navigation.navigate("About")}>
      <Icon name={"info-outline"} color={"white"} />
    </TouchableHighlight>
  ),
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: primaryColor
  },
  headerTitleStyle: {
    fontSize: 16
  }
})
export default navOptions
