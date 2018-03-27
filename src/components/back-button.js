import React from "react"
import PropTypes from "prop-types"
import { Icon } from "react-native-elements"
import { TouchableHighlight } from "react-native"

const BackButton = ({ dispatchToPrev, color }) => (
  <TouchableHighlight onPress={dispatchToPrev} activeOpacity={0.5}>
    <Icon name="arrow-back" color={color} />
  </TouchableHighlight>
)

BackButton.propTypes = {
  color: PropTypes.string,
  dispatchToPrev: PropTypes.func.isRequired,
}

BackButton.defaultProps = {
  color: "black",
}

export default BackButton
