import React from "react"
import PropTypes from "prop-types"
import { Image, TouchableOpacity } from "react-native"

import { detailStyles as style } from "styles"
import { detailExists } from "./detail-items"

const Poster = ({ uri, onPress }) =>
  detailExists(uri) && (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={{ uri }}
        style={style.poster}
        resizeMode={Image.resizeMode.contain}
        loadingIndicatorSource={require("assets/spinningwheel-300x216.gif")}
      />
    </TouchableOpacity>
  )

Poster.propTypes = {
  uri: PropTypes.string,
  onPress: PropTypes.func.isRequired
}

export default Poster
