import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { View, StyleSheet, ActivityIndicator } from "react-native"

import { primaryColor } from "constants"

const style = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    paddingVertical: 20,
    borderTopWidth: 1
  }
})

export const footer = ({ isFetching }) =>
  isFetching && (
    <View style={style.wrapper}>
      <ActivityIndicator size="large" color={primaryColor} />
    </View>
  )
footer.propTypes = {
  isFetching: PropTypes.bool
}
footer.defaultProps = {
  isFetching: false
}

export default connect(state => ({
  isFetching: state.isFetching
}))(footer)
