import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import LoadingIndicator from "components/loading-indicator"
import FilmDetails from "./film-details"
import getTitle from "util/get-title"
import navOpts from "navigation-options"
import { Screens } from "constants"

export const filmDetailsScreen = ({ filmDetails, navigation }) =>
  filmDetails ? (
    <FilmDetails
      details={filmDetails}
      onPressPoster={() =>
        navigation.navigate(Screens.Poster, {
          uri: filmDetails.Poster,
          title: getTitle(filmDetails)
        })
      }
    />
  ) : (
    <LoadingIndicator />
  )

filmDetailsScreen.navigationOptions = ({ navigation }) => {
  const baseOpts = navOpts(navigation)
  return {
    ...baseOpts,
    title: getTitle(navigation.getParam("filmSummary", {})),
    headerTitleStyle: {
      ...baseOpts.headerTitleStyle,
      marginRight: 40
    },
    headerRight: null
  }
}

filmDetailsScreen.propTypes = {
  filmDetails: PropTypes.object,
  navigation: PropTypes.object.isRequired
}

export default connect(state => ({
  filmDetails: state.filmDetails
}))(filmDetailsScreen)
