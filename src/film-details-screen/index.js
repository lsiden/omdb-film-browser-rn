import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import LoadingIndicator from "components/loading-indicator"
import FilmDetails from "./film-details"
import getTitle from "util/get-title"
import navOpts, { insertRightSpacer } from "navigation-options"
import { Screens } from "constants"

export const renderFilmDetailsScreen = ({ filmDetails, navigation }) =>
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

renderFilmDetailsScreen.propTypes = {
  filmDetails: PropTypes.object,
  navigation: PropTypes.object.isRequired
}

class filmDetailsScreen extends React.Component {
  static propTypes = {
    filmDetails: PropTypes.object,
    navigation: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.timeout = setTimeout(() => {
      props.navigation.goBack()
    }, 5000)
  }

  render() {
    if (this.props.filmDetails) {
      clearTimeout(this.timeout)
    }
    return renderFilmDetailsScreen(this.props)
  }
}

renderFilmDetailsScreen.navigationOptions = ({ navigation }) =>
  insertRightSpacer({
    ...navOpts(navigation),
    title: getTitle(navigation.getParam("filmSummary", {}))
  })

export default connect(state => ({
  filmDetails: state.filmDetails
}))(filmDetailsScreen)
