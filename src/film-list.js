import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { View, FlatList, Text } from "react-native"
import cuid from "cuid"

import FilmTitle from "./film-title"
import { TITLE_COLOR } from "./constants"

const ulStyle = {}
const msgStyle = {
  fontSize: 14,
  color: TITLE_COLOR,
  margin: 10,
}
const keyExtractor = item => cuid.slug()

renderListItem = ({ item }) => (
  <FilmTitle key={item.imdbID} filmSummary={item} />
)

export const filmList = ({ films }) => {
  if (films.length > 0) {
    return (
      <FlatList
        style={ulStyle}
        data={films}
        renderItem={renderListItem}
        keyExtractor={keyExtractor}
      />
    )
  } else {
    return (
      <Text style={msgStyle}>
        {"There are no films that match your query yet."}
      </Text>
    )
  }
}

filmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
}
filmList.defaultProps = {
  films: [],
}

export default connect(state => ({
  films: state.films,
}))(filmList)
