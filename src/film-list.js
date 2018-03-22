import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Text, View, ActivityIndicator, StyleSheet } from "react-native"
import { List, ListItem } from "react-native-elements"

import { filmListStyles } from "./styles"
import { fetchFilmDetails } from "./actions/fetch"
import { viewFilmSummary, updateIsFetching } from "./actions"
import Pager from "components/pager"
import LoadingIndicator from "./components/loading-indicator"

export const filmList = ({ films, dispatchViewDetail, isFetching }) => {
  if (isFetching) {
    return <LoadingIndicator />
  } else if (films.length > 0) {
    return (
      <View>
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
        <Pager />
      </View>
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
  isFetching: PropTypes.bool,
}
filmList.defaultProps = {
  films: [],
  isFetching: false,
}

export default connect(
  state => ({
    films: state.films,
    isFetching: state.isFetching,
  }),
  dispatch => ({
    dispatchViewDetail: filmSummary => {
      dispatch(updateIsFetching(true))
      dispatch(viewFilmSummary(filmSummary))
      dispatch(fetchFilmDetails(filmSummary.imdbID))
    },
  })
)(filmList)
