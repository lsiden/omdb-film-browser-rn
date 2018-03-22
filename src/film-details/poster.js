import React from "react"
import PropTypes from "prop-types"
import { Image } from "react-native"

import { detailStyles } from "styles"

const Poster = ({ filmSummary }) =>
  filmSummary.Poster &&
  filmSummary.Poster !== "N/A" && (
    <Image
      source={{ uri: filmSummary.Poster }}
      style={detailStyles.poster}
      resizeMode={Image.resizeMode.contain}
    />
  )

Poster.propTypes = {
  filmSummary: PropTypes.object.isRequired,
}

export default Poster
