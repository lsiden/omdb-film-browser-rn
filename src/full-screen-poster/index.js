import React from "react"
import PropTypes from "prop-types"
import { Image, Text, View } from "react-native"
import { connect } from "react-redux"
import GestureRecognizer from "react-native-swipe-gestures"

import { fullScreenPosterStyles as style } from "styles"
import { viewFilmDetails, updateIsFetching } from "actions"

const hintStyle = { color: "gray", marginTop: 5 }
const hintWrapperStyle = { justifyContent: "center" }

export const fullScreenPoster = ({ uri, dispatchToDetails }) => {
  return uri ? (
    <GestureRecognizer style={style.wrapper} onSwipe={dispatchToDetails}>
      <Image
        source={{ uri }}
        style={style.poster}
        resizeMode={"contain"}
        loadingIndicatorSource={require("assets/spinningwheel-300x216.gif")}
      />
      <View hintWrapperStyle={hintWrapperStyle}>
        <Text style={hintStyle}>{"Dismiss by swiping."}</Text>
      </View>
    </GestureRecognizer>
  ) : null
}

fullScreenPoster.propTypes = {
  uri: PropTypes.string.isRequired,
  dispatchToDetails: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    uri: (state.poster || {}).uri,
  }),
  dispatch => ({
    dispatchToDetails: () => {
      dispatch(updateIsFetching(false))
      dispatch(viewFilmDetails())
    },
  })
)(fullScreenPoster)
