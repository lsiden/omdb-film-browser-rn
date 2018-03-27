import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { TouchableOpacity, Text, View } from "react-native"
import { List, ListItem } from "react-native-elements"

import { appStyles as style } from "styles"
import Pager from "components/pager"
import LoadingIndicator from "components/loading-indicator"
import { viewFilmDetails } from "actions"
import { fetchFilmDetails } from "actions/fetch"

export const filmList = ({
  films,
  totalResults,
  isFetching,
  dispatchViewDetails
}) =>
  isFetching ? (
    <LoadingIndicator />
  ) : (
    <React.Fragment>
      <View style={style.messageWrapper}>
        <Text style={style.message}>{`Found ${totalResults} results.`}</Text>
      </View>
      <List>
        {films.map(film => (
          <TouchableOpacity
            key={film.imdbID}
            onPress={() => dispatchViewDetails(film)}
          >
            <ListItem title={film.Title} subtitle={film.Year} />
          </TouchableOpacity>
        ))}
      </List>
      <Pager />
    </React.Fragment>
  )

filmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  totalResults: PropTypes.number,
  isFetching: PropTypes.bool,
  dispatchViewDetails: PropTypes.func.isRequired
}
filmList.defaultProps = {
  films: [],
  isFetching: false
}

export default connect(
  state => ({
    films: state.films || [],
    totalResults: state.totalResults || 0,
    isFetching: state.isFetching
  }),
  dispatch => ({
    dispatchViewDetails: filmSummary => {
      dispatch(viewFilmDetails())
      dispatch(fetchFilmDetails(filmSummary.imdbID))
    }
  })
)(filmList)
