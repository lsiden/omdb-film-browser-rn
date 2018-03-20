import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { TouchableHighlight, Text } from "react-native"

import { viewFilmSummary, fetchFilmDetails } from "./actions"
import { TITLE_COLOR } from "./constants"

const textStyle = {
  lineHeight: 30,
  fontSize: 18,
}
export const filmTitle = ({ filmSummary, dispatchViewDetail }) => (
  <TouchableHighlight onPress={() => dispatchViewDetail(filmSummary)}>
    <Text style={textStyle}>{`${filmSummary.Title}, ${filmSummary.Year}`}</Text>
  </TouchableHighlight>
)

filmTitle.propTypes = {
  filmSummary: PropTypes.object.isRequired,
  dispatchViewDetail: PropTypes.func.isRequired,
}

export default connect(null, dispatch => ({
  dispatchViewDetail: filmSummary => {
    dispatch(viewFilmSummary(filmSummary))
    dispatch(fetchFilmDetails(filmSummary.imdbID))
  },
}))(filmTitle)
