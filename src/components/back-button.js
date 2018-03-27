import React from "react"
import PropTypes from "prop-types"
import { Icon } from "react-native-elements"
import { TouchableHighlight } from "react-native"

const icon = name => ({
  name,
  type: "material",
  size: 25,
  color: "black",
})

const style = {
  backgroundColor: "transparent",
}

const BackButton = ({ dispatchToPrev }) => (
  <TouchableHighlight onPress={dispatchToPrev} buttonStyle={style}>
    <Icon name="arrow-back" />
  </TouchableHighlight>
)

BackButton.propTypes = {
  dispatchToPrev: PropTypes.func.isRequired,
}

export default BackButton
