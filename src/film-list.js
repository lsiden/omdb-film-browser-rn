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

const renderMessage = msg => <Text style={filmListStyles.msgStyle}>{msg}</Text>

export const filmList = ({
  films,
  dispatchViewDetail,
  isFetching,
  totalResults,
}) => {
  if (isFetching) {
    return <LoadingIndicator />
  } else if (films.length > 0) {
    return (
      <View>
        {renderMessage(`Found ${totalResults} results.`)}
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
    return renderMessage("There are no films that match your query yet.")
  }
}

filmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  dispatchViewDetail: PropTypes.func.isRequired,
  isFetching: PropTypes.bool,
  totalResults: PropTypes.number,
}
filmList.defaultProps = {
  films: [],
  isFetching: false,
}

export default connect(
  state => ({
    films: state.films,
    isFetching: state.isFetching,
    totalResults: state.totalResults,
  }),
  dispatch => ({
    dispatchViewDetail: filmSummary => {
      dispatch(updateIsFetching(true))
      dispatch(viewFilmSummary(filmSummary))
      dispatch(fetchFilmDetails(filmSummary.imdbID))
    },
  })
)(filmList)
