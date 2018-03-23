/* NOTE
 * This is a lot of boilerplate for such a small copmonent.
 * I broke FilmListItem out of FilmList in the hope of being able to test that
 * dispatchViewDetails() property gets called when a ListItem is pressed.
 * Unfortunately, react-native-elements renders ListItem in a way
 * that does not allow me to simulate a press in my test
 * or to find and invokes the onPress() property directly.
 */
import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { ListItem } from "react-native-elements"

import { viewFilmDetails } from "actions"
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
    dispatch(viewFilmDetails())
    dispatch(fetchFilmDetails(filmSummary.imdbID))
  },
}))(filmListItem)
