import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Text } from "react-native"
import { List, ListItem } from "react-native-elements"

import { filmListStyles } from "./styles"
import { viewFilmSummary, fetchFilmDetails } from "./actions"

// TODO make list pageable
// TODO show loading icon
export const filmList = ({ films, dispatchViewDetail }) => {
  if (films.length > 0) {
    return (
      <List>
        {films.map(filmSummary => (
          <ListItem
            key={filmSummary.imdbID}
            title={filmSummary.Title}
            subtitle={filmSummary.Year}
            onPress={() => dispatchViewDetail(filmSummary)}
          />
        ))}
      </List>
    )
  } else {
    return (
      <Text style={filmListStyles.msgStyle}>
        {"There are no films that match your query yet."}
      </Text>
    )
  }
}

filmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  dispatchViewDetail: PropTypes.func.isRequired,
}
filmList.defaultProps = {
  films: [],
}

export default connect(
  state => ({
    films: state.films,
  }),
  dispatch => ({
    dispatchViewDetail: filmSummary => {
      dispatch(viewFilmSummary(filmSummary))
      dispatch(fetchFilmDetails(filmSummary.imdbID))
    },
  })
)(filmList)
