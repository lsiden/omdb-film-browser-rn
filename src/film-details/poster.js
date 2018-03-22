import React from "react"
import PropTypes from "prop-types"
import { Image } from "react-native"
import { connect } from "react-redux"

import { detailStyles } from "styles"
import { detailExists } from "./detail-items"

export const poster = ({ uri }) =>
  detailExists(uri) && (
    <Image
      source={{ uri }}
      style={detailStyles.poster}
      resizeMode={Image.resizeMode.contain}
    />
  )

poster.propTypes = {
  uri: PropTypes.string,
}

export default connect(state => ({
  uri: (state.filmDetails || {}).Poster,
}))(poster)
