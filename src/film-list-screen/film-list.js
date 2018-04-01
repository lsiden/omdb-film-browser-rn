import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { FlatList } from "react-native"
import { List } from "react-native-elements"
import cuid from "cuid"

import { fetchPage, fetchFilmDetails } from "actions/fetch"
import FilmListItem from "./film-list-item"
import Header from "./header"
import Footer from "./footer"
import { updateFilmDetails } from "actions"

/*
TODO - Seeing console message:
13:07:56: VirtualizedList: You have a large list that is slow to update - make sure your renderItem function renders components that follow React performance best practices like PureComponent, shouldComponentUpdate, etc. Object {
13:07:56:   "contentLength": 2946,
13:07:56:   "dt": 2493,
13:07:56:   "prevDt": 7814,
13:07:56: }
*/

export const filmList = ({
  navigation,
  films,
  totalResults,
  dispatchFetchPage,
  dispatchFetchFilmDetails,
  dispatchResetFilmDetails
}) => {
  const renderFilmListItem = props => {
    const filmSummary = props.item
    return (
      <FilmListItem
        filmSummary={filmSummary}
        onPress={() => {
          dispatchResetFilmDetails()
          dispatchFetchFilmDetails(filmSummary.imdbID)
          navigation.navigate("FilmDetails", { filmSummary })
        }}
      />
    )
  }
  renderFilmListItem.propTypes = {
    item: PropTypes.object.isRequired
  }
  return (
    films && (
      <List>
        <FlatList
          data={films}
          renderItem={props => renderFilmListItem(props)}
          keyExtractor={() => cuid.slug()}
          ListHeaderComponent={<Header totalResults={totalResults} />}
          ListFooterComponent={<Footer />}
          onEndReached={() => dispatchFetchPage()}
        />
      </List>
    )
  )
}

filmList.propTypes = {
  navigation: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object),
  totalResults: PropTypes.number,
  dispatchFetchPage: PropTypes.func.isRequired,
  dispatchFetchFilmDetails: PropTypes.func.isRequired,
  dispatchResetFilmDetails: PropTypes.func.isRequired
}
filmList.defaultProps = {
  isFetching: false
}

export default connect(
  state => ({
    films: state.films || [],
    totalResults: state.totalResults || 0
  }),
  dispatch => ({
    dispatchFetchPage: () => dispatch(fetchPage()),
    dispatchFetchFilmDetails: imdbID => dispatch(fetchFilmDetails(imdbID)),
    dispatchResetFilmDetails: () => dispatch(updateFilmDetails(null))
  })
)(filmList)
