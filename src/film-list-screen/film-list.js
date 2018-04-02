import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { FlatList, TouchableOpacity } from "react-native"
import { List, ListItem } from "react-native-elements"
import cuid from "cuid"

import { updateFilmDetails } from "actions"
import { fetchQueryResultPage, fetchFilmDetails } from "actions/fetch"
import Header from "./header"
import Footer from "./footer"
import { Screens } from "constants"

export const filmList = ({
  navigation,
  films,
  totalResults,
  dispatchFetchPage,
  dispatchFetchFilmDetails
}) => {
  const renderFilmListItem = props => {
    const filmSummary = props.item
    const onPress = () => {
      dispatchFetchFilmDetails(filmSummary.imdbID)
      navigation.navigate(Screens.FilmDetails, { filmSummary })
    }
    return (
      <TouchableOpacity onPress={onPress}>
        <ListItem title={filmSummary.Title} subtitle={filmSummary.Year} />
      </TouchableOpacity>
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
  dispatchFetchFilmDetails: PropTypes.func.isRequired
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
    dispatchFetchPage: () => dispatch(fetchQueryResultPage()),
    dispatchFetchFilmDetails: imdbID => {
      dispatch(updateFilmDetails(null))
      dispatch(fetchFilmDetails(imdbID))
    }
  })
)(filmList)
