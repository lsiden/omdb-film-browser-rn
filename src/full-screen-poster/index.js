import React from "react"
import PropTypes from "prop-types"
import { Image, View } from "react-native"
import { connect } from "react-redux"

import BackButton from "./back-button"

export const posterStyle = {
  flex: 1,
  height: undefined,
  width: undefined,
}

const wrapperStyle = {
  height: "98%",
  width: "100%",
  marginTop: 5,
  marginBottom: 5,
}

const backButtonStyle = {
  marginLeft: 20,
}

export const fullScreenPoster = ({ uri }) => {
  return (
    uri && (
      <View style={wrapperStyle}>
        <View style={{ marginLeft: 20 }}>
          <BackButton style={backButtonStyle} />
        </View>
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
