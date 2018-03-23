import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"

const show = ({ when, style = {}, children }) =>
  when && <View style={style}>{children}</View>

show.propTypes = {
  when: PropTypes.bool.isRequired,
  style: PropTypes.object,
  children: PropTypes.element.isRequired,
}

export default show
