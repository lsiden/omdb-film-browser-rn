import React from "react"
import PropTypes from "prop-types"
import { View } from "react-native"

const show = ({ when, style = {}, children }) =>
  when ? <View style={style}>{children}</View> : null

show.propTypes = {
  when: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.element.isRequired,
}

show.defaultProps = {
  when: false,
}

export default show
