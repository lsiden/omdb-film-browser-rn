import React from "react"
import PropTypes from "prop-types"
import { Image } from "react-native"
import { connect } from "react-redux"
import GestureRecognizer from "react-native-swipe-gestures"

import { fullScreenPosterStyles as style } from "styles"
import { viewFilmDetails, updateIsFetching } from "actions"

export const fullScreenPoster = ({ uri, dispatchToDetails }) => {
  return uri ? (
    <GestureRecognizer style={style.wrapperStyle} onSwipe={dispatchToDetails}>
      <Image
        source={{ uri }}
        style={style.posterStyle}
        resizeMode={"contain"}
        loadingIndicatorSource={require("assets/spinningwheel-300x216.gif")}
      />
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
