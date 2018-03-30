import React from "react"
import PropTypes from "prop-types"
import { Text } from "react-native"
import { connect } from "react-redux"

import { detailExists } from "./detail-items"
import style from "./style"

export const filmPlot = ({ plot }) => {
  if (!detailExists(plot)) {
    return <Text style={style.plotUnavailable}>Plot unavailable</Text>
  }
  return <Text style={style.plot}>{plot}</Text>
}

filmPlot.propTypes = {
  plot: PropTypes.string
}

export default connect(state => ({
  plot: (state.filmDetails || {}).Plot
}))(filmPlot)
