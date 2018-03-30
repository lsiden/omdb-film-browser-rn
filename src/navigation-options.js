import React from "react"

import { TouchableHighlight } from "react-native"
import { Icon } from "react-native-elements"

import { primaryColor } from "./constants"

const navOptions = navigation => ({
  title: "Open Movie Database Browser",
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
    fontSize: 20
  }
})
export default navOptions
