import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { FlatList } from "react-native"
import { List } from "react-native-elements"
import cuid from "cuid"

import { fetchPage } from "actions/fetch"
import FilmListItem from "./film-list-item"
import Header from "./header"
import Footer from "./footer"

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
      renderItem={({ item }) => (
        <FilmListItem
          filmSummary={item}
          onPress={() => navigation.navigate("FilmDetails", { item })}
        />
      )}
      keyExtractor={() => cuid.slug()}
      ListHeaderComponent={<Header totalResults={totalResults} />}
      ListFooterComponent={<Footer />}
      onEndReached={() => dispatchFetchPage(pageNum + 1)}
      onEndReachedThreshold={20}
      initialNumToRender={30}
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
