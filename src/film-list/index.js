import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Text, View, ScrollView } from "react-native"
import { List } from "react-native-elements"

import { appStyles } from "styles"
import Pager from "components/pager"
import FilmListItem from "./film-list-item"
import LoadingIndicator from "components/loading-indicator"

const renderMessage = msg => <Text style={appStyles.msgStyle}>{msg}</Text>

export const filmList = ({ films, totalResults, isFetching }) =>
  isFetching ? (
    <LoadingIndicator />
  ) : (
    <View>
      <ScrollView className="App" style={appStyles.scrollWrapper}>
        {renderMessage(`Found ${totalResults} results.`)}
        <List>
          {films.map(filmSummary => (
            <FilmListItem key={filmSummary.imdbID} filmSummary={filmSummary} />
          ))}
        </List>
      </ScrollView>
      <Pager />
    </View>
  )

filmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  totalResults: PropTypes.number,
  isFetching: PropTypes.bool,
}
filmList.defaultProps = {
  films: [],
  isFetching: false,
}

export default connect(state => ({
  films: state.films || [],
  totalResults: state.totalResults || 0,
  isFetching: state.isFetching,
}))(filmList)
