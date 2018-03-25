import React from "react"
import PropTypes from "prop-types"
import { Image, View } from "react-native"
import { connect } from "react-redux"

import BackButton from "./back-button"
import { fullScreenPosterStyles as style, detailStyles } from "styles"

export const fullScreenPoster = ({ uri }) => {
  return uri ? (
    <View style={style.wrapperStyle}>
      <View style={detailStyles.header}>
        <BackButton />
      </View>
      <Image
        source={{ uri }}
        style={style.posterStyle}
        resizeMode={"contain"}
        loadingIndicatorSource={require("assets/spinningwheel-300x216.gif")}
      />
    </View>
  ) : null
}

fullScreenPoster.propTypes = {
  uri: PropTypes.string.isRequired,
}

export default connect(state => ({
  uri: (state.poster || {}).uri,
}))(fullScreenPoster)
