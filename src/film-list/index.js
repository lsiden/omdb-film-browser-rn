import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Text, View } from "react-native"
import { List } from "react-native-elements"

import { appStyles, loadingIndicatorStyle } from "styles"
import Pager from "components/pager"
import LoadingIndicator from "components/loading-indicator"
import FilmListItem from "./film-list-item"

const renderMessage = msg => <Text style={appStyles.msgStyle}>{msg}</Text>
const loadingWrapperStyle = {
  height: "100%",
  justifyContent: "center",
}
export const filmList = ({ films, isFetching, totalResults }) => {
  if (isFetching) {
    return (
      <View style={loadingWrapperStyle}>
        <LoadingIndicator style={loadingIndicatorStyle} />
      </View>
    )
  } else if (films.length > 0) {
    return (
      <View>
        {renderMessage(`Found ${totalResults} results.`)}
        <List>
          {films.map(filmSummary => (
            <FilmListItem key={filmSummary.imdbID} filmSummary={filmSummary} />
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
  isFetching: PropTypes.bool,
  totalResults: PropTypes.number,
}
filmList.defaultProps = {
  films: [],
  isFetching: false,
}

export default connect(state => ({
  films: state.films,
  isFetching: state.isFetching,
  totalResults: state.totalResults,
}))(filmList)
