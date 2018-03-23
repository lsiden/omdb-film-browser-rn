import React from "react"
import PropTypes from "prop-types"
import { Image, TouchableOpacity } from "react-native"
import { connect } from "react-redux"

import { detailStyles } from "styles"
import { viewPoster } from "actions"
import { detailExists } from "./detail-items"

export const poster = ({ uri, dispatchViewPoster }) =>
  detailExists(uri) && (
    <TouchableOpacity onPress={() => dispatchViewPoster(uri)}>
      <Image
        source={{ uri }}
        style={detailStyles.poster}
        resizeMode={Image.resizeMode.contain}
      />
    </TouchableOpacity>
  )

poster.propTypes = {
  uri: PropTypes.string,
  dispatchViewPoster: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    uri: (state.filmDetails || {}).Poster,
  }),
  dispatch => ({
    dispatchViewPoster: uri => dispatch(viewPoster(uri)),
  })
)(poster)
