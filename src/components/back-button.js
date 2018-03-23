import React from "react"
import { Text, TouchableOpacity } from "react-native"
import PropTypes from "prop-types"

import { detailStyles } from "styles"
import { LEFT_TRIANGLE } from "constants"

const BackButton = ({ dispatchToPrev }) => (
  <TouchableOpacity onPress={dispatchToPrev}>
    <Text style={detailStyles.buttonText}>{LEFT_TRIANGLE}</Text>
  </TouchableOpacity>
)

BackButton.propTypes = {
  dispatchToPrev: PropTypes.func.isRequired,
}

export default BackButton
