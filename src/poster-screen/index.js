import React from "react"
import PropTypes from "prop-types"
import { Image } from "react-native"

import style from "./style"
import navOpts, { insertRightSpacer } from "navigation-options"

const PosterScreen = ({ navigation }) => {
  const uri = navigation.getParam("uri")
  return uri && uri !== "N/A" ? (
    <Image
      source={{ uri }}
      style={style.poster}
      resizeMode={"contain"}
      loadingIndicatorSource={require("images/spinningwheel-300x216.gif")}
    />
  ) : null
}

PosterScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

PosterScreen.navigationOptions = ({ navigation }) =>
  insertRightSpacer({
    ...navOpts(navigation),
    title: navigation.getParam("title")
  })

export default PosterScreen
