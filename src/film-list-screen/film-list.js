import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { FlatList } from "react-native"

import { fetchQueryResultPage } from "actions/fetch"
import Header from "./header"
import Footer from "./footer"
import { Screens } from "constants"
import FilmListItem from "./film-list-item"

export const filmList = ({
  navigation,
  films,
  totalResults,
  dispatchFetchPage
}) => {
  const navigateToDetailsScreen = navigation.navigate.bind(
    null,
    Screens.FilmDetails
  )

  // eslint-disable-next-line react/prop-types
  const renderItem = ({ item }) => (
    <FilmListItem
      filmSummary={item}
      navigateToDetailsScreen={navigateToDetailsScreen}
    />
  )
  return (
    <FlatList
      data={films}
      renderItem={renderItem}
      keyExtractor={item => item.imdbID}
      ListHeaderComponent={<Header totalResults={totalResults} />}
      ListFooterComponent={<Footer />}
      onEndReached={() => dispatchFetchPage()}
      initialNumToRender={8}
      onEndReachedThreshold={1}
    />
  )
}

filmList.propTypes = {
  navigation: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object),
  totalResults: PropTypes.number,
  dispatchFetchPage: PropTypes.func.isRequired
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
    dispatchFetchPage: () => dispatch(fetchQueryResultPage())
  })
)(filmList)
