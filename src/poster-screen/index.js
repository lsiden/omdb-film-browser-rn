import React from "react"
import PropTypes from "prop-types"
import { Image } from "react-native"

import style from "./style"
import navOpts from "navigation-options"

const PosterScreen = ({ navigation }) => {
  const uri = navigation.getParam("uri")
  return uri && uri !== "N/A" ? (
    <Image
      source={{ uri }}
      style={style.poster}
      resizeMode={"contain"}
      loadingIndicatorSource={require("assets/spinningwheel-300x216.gif")}
    />
  ) : null
}

PosterScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

PosterScreen.navigationOptions = ({ navigation }) => {
  const baseOpts = navOpts(navigation)
  return {
    ...baseOpts,
    title: navigation.getParam("title"),
    headerTitleStyle: {
      ...baseOpts.headerTitleStyle,
      marginRight: 40
    },
    headerRight: null
  }
}

export default PosterScreen
