import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import LoadingIndicator from "components/loading-indicator"
import { fetchFilmDetails } from "actions/fetch"
import { updateFilmDetails } from "actions"
import FilmDetails from "./film-details"
import getTitle from "util/get-title"

import navOpts from "navigation-options"

export class filmDetailsScreen extends React.Component {
  constructor(props) {
    super(props)
    const {
      navigation,
      dispatchFetchFilmDetails,
      dispatchResetFilmDetails
    } = props
    const filmSummary = navigation.getParam("filmSummary", {})
    const { imdbID } = filmSummary
    dispatchResetFilmDetails()
    imdbID && dispatchFetchFilmDetails(filmSummary.imdbID)
  }

  render() {
    const { filmDetails, navigation } = this.props
    return filmDetails ? (
      <FilmDetails
        details={filmDetails}
        onPressPoster={() =>
          navigation.navigate("Poster", {
            uri: filmDetails.Poster,
            title: getTitle(filmDetails)
          })
        }
      />
    ) : (
      <LoadingIndicator />
    )
  }
}

filmDetailsScreen.navigationOptions = ({ navigation }) => ({
  ...navOpts(navigation),
  title: getTitle(navigation.getParam("filmSummary", {})),
  headerRight: null
})

filmDetailsScreen.propTypes = {
  filmDetails: PropTypes.object,
  navigation: PropTypes.object.isRequired,
  dispatchFetchFilmDetails: PropTypes.func.isRequired,
  dispatchResetFilmDetails: PropTypes.func.isRequired
}

export default connect(
  state => ({
    filmDetails: state.filmDetails
  }),
  dispatch => ({
    dispatchResetFilmDetails: () => dispatch(updateFilmDetails(null)),
    dispatchFetchFilmDetails: imdbID => dispatch(fetchFilmDetails(imdbID))
  })
)(filmDetailsScreen)
