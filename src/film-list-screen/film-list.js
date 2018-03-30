import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { TouchableOpacity, FlatList } from "react-native"
import { List, ListItem } from "react-native-elements"

import { fetchPage } from "actions/fetch"
import SeearchBarWithCount from "./search-bar-with-count"

const renderFilmSummary = (navigation, { item: filmSummary }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("FilmDetails", { filmSummary })}
  >
    <ListItem title={filmSummary.Title} subtitle={filmSummary.Year} />
  </TouchableOpacity>
)

export const filmList = ({
  navigation,
  films,
  totalResults,
  pageNum,
  dispatchFetchPage
}) => (
  <List>
    <FlatList
      data={films}
      renderItem={renderFilmSummary.bind(null, navigation)}
      keyExtractor={film => film.imdbID}
      ListHeaderComponent={<SeearchBarWithCount totalResults={totalResults} />}
      onEndReached={() => dispatchFetchPage(pageNum + 1)}
      onEndReachedThreshold={10}
    />
  </List>
)

filmList.propTypes = {
  navigation: PropTypes.object.isRequired,
  films: PropTypes.arrayOf(PropTypes.object),
  totalResults: PropTypes.number,
  pageNum: PropTypes.number,
  dispatchFetchPage: PropTypes.func.isRequired
}

export default connect(
  state => ({
    films: state.films || [],
    totalResults: state.totalResults || 0,
    pageNum: state.pageNum || 0
  }),
  dispatch => ({
    dispatchFetchPage: pageNum => dispatch(fetchPage(pageNum))
  })
)(filmList)
