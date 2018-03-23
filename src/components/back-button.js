import React from "react"
import { Text, TouchableOpacity } from "react-native"
import PropTypes from "prop-types"

import { appStyles as style } from "styles"
import { LEFT_TRIANGLE } from "constants"

const BackButton = ({ dispatchToPrev }) => (
  <TouchableOpacity onPress={dispatchToPrev} style={style.backButtonStyle}>
    <Text style={style.buttonText}>{LEFT_TRIANGLE}</Text>
  </TouchableOpacity>
)

BackButton.propTypes = {
  dispatchToPrev: PropTypes.func.isRequired,
}

export default BackButton
