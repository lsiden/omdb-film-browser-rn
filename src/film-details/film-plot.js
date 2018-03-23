import React from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"

import { detailExists } from "./detail-items"
import { detailStyles as styles } from "styles"

const FilmPlot = ({ plot }) => {
  if (!detailExists(plot)) {
    return <Text style={styles.plotUnavailable}>Plot unavailable</Text>
  }
  return <Text style={styles.plot}>{plot}</Text>
}

FilmPlot.propTypes = {
  plot: PropTypes.string,
}

export default FilmPlot
