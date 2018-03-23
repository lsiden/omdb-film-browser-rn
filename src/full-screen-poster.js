import React from "react"
import PropTypes from "prop-types"
import { Image, View } from "react-native"
import { connect } from "react-redux"

export const posterStyle = {
  flex: 1,
  height: undefined,
  width: undefined,
}

const wrapperStyle = {
  height: "100%",
  width: "100%",
  marginTop: 5,
  marginBottom: 5,
}

export const fullScreenPoster = ({ uri }) => {
  return (
    uri && (
      <View style={wrapperStyle}>
        <Image source={{ uri }} style={posterStyle} resizeMode={"contain"} />
      </View>
    )
  )
}

fullScreenPoster.propTypes = {
  uri: PropTypes.string.isRequired,
}

export default connect(state => ({
  uri: (state.poster || {}).uri,
}))(fullScreenPoster)
