import React from "react"
import PropTypes from "prop-types"
import { Icon } from "react-native-elements"
import { TouchableHighlight } from "react-native"

const BackButton = ({ dispatchToPrev }) => (
  <TouchableHighlight onPress={dispatchToPrev} activeOpacity={0.5}>
    <Icon name="arrow-back" />
  </TouchableHighlight>
)

BackButton.propTypes = {
  dispatchToPrev: PropTypes.func.isRequired,
}

export default BackButton
