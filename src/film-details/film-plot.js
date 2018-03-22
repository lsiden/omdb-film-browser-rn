import React from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"

import { detailExists } from "./detail-items"
import { detailStyles } from "styles"

const FilmPlot = ({ filmDetails }) => {
  const { plot } = filmDetails

  if (!detailExists(plot)) {
    return <Text style={detailStyles.plot}>Plot unavailable</Text>
  }
  return <Text>{filmDetails.Plot}</Text>
}

FilmPlot.propTypes = {
  filmDetails: PropTypes.object.isRequired,
}

export default FilmPlot
