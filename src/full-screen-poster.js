import React from "react"
import PropTypes from "prop-types"
import { Image, View } from "react-native"
import { connect } from "react-redux"

import { fullSceenPosterStyles as styles } from "./styles"

export const fullScreenPoster = ({ uri }) => {
  return (
    <View style={styles.wrapper}>
      <Image style={styles.image} source={{ uri }} />
    </View>
  )
}

fullScreenPoster.propTypes = {
  uri: PropTypes.string.isRequired,
}

export default connect(state => ({
  uri: (state.poster || {}).uri,
}))(fullScreenPoster)
