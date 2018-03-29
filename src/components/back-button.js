import React from "react"
import PropTypes from "prop-types"
import { Icon } from "react-native-elements"
import { TouchableHighlight } from "react-native"

const style = {
  marginLeft: 5
}
const BackButton = ({ navigation, color }) => (
  <TouchableHighlight
    onPress={navigation.goBack()}
    activeOpacity={0.5}
    style={style}
  >
    <Icon name="arrow-back" color={color} />
  </TouchableHighlight>
)

BackButton.propTypes = {
  navigation: PropTypes.object.isRequired,
  color: PropTypes.string
}

BackButton.defaultProps = {
  color: "white"
}

export default BackButton
