import React from "react"
import PropTypes from "prop-types"
import { Image, TouchableOpacity } from "react-native"
import { connect } from "react-redux"

import { detailStyles as style } from "styles"
import { viewPoster } from "actions"
import { detailExists } from "./detail-items"

export const poster = ({ uri, dispatchViewPoster }) =>
  detailExists(uri) && (
    <TouchableOpacity onPress={() => dispatchViewPoster(uri)}>
      <Image
        source={{ uri }}
        style={style.poster}
        resizeMode={Image.resizeMode.contain}
        loadingIndicatorSource={require("assets/spinningwheel-300x216.gif")}
      />
    </TouchableOpacity>
  )

poster.propTypes = {
  uri: PropTypes.string,
  dispatchViewPoster: PropTypes.func.isRequired
}

export default connect(
  state => ({
    uri: (state.filmDetails || {}).Poster
  }),
  dispatch => ({
    dispatchViewPoster: uri => dispatch(viewPoster(uri))
  })
)(poster)