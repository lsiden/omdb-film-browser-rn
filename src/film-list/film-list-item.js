import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { ListItem } from "react-native-elements"

import { viewFilmSummary, updateIsFetching } from "actions"
import { fetchFilmDetails } from "actions/fetch"

export const filmListItem = ({ filmSummary, dispatchViewDetails }) => (
  <ListItem
    title={filmSummary.Title}
    subtitle={filmSummary.Year}
    onPress={() => dispatchViewDetails(filmSummary)}
  />
)

filmListItem.propTypes = {
  filmSummary: PropTypes.object.isRequired,
  dispatchViewDetails: PropTypes.func.isRequired,
}

// Export this to enable mocking.
export default connect(null, dispatch => ({
  dispatchViewDetails: filmSummary => {
    dispatch(updateIsFetching(true))
    dispatch(viewFilmSummary(filmSummary))
    dispatch(fetchFilmDetails(filmSummary.imdbID))
  },
}))(filmListItem)
