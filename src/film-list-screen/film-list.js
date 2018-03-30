import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { TouchableOpacity, FlatList } from "react-native"
import { List, ListItem } from "react-native-elements"

import SeearchBarWithCount from "./search-bar-with-count"

const renderFilmSummary = (navigation, { item: filmSummary }) => (
  <TouchableOpacity
    onPress={() => navigation.navigate("FilmDetails", { filmSummary })}
  >
    <ListItem title={filmSummary.Title} subtitle={filmSummary.Year} />
  </TouchableOpacity>
)

export const filmList = ({ films, totalResults, navigation }) => (
  <List>
    <FlatList
      data={films}
      renderItem={renderFilmSummary.bind(null, navigation)}
      keyExtractor={film => film.imdbID}
      ListHeaderComponent={<SeearchBarWithCount totalResults={totalResults} />}
    />
  </List>
)

filmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  totalResults: PropTypes.number,
  navigation: PropTypes.object.isRequired
}
filmList.defaultProps = {
  films: []
}

export default connect(state => ({
  films: state.films || [],
  totalResults: state.totalResults || 0
}))(filmList)
