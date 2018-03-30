import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Toaster from "react-native-toaster"
import { StackNavigator } from "react-navigation"

import FilmListScreen from "film-list-screen"
import FilmDetailsScreen from "film-details-screen"
import PosterScreen from "poster-screen"
import AboutScreen from "about-screen"
import navOpts from "navigation-options"

const navigatorOptions = ({ navigation }) => ({
  initialRouteName: "FilmList",
  navigationOptions: navOpts(navigation)
})

const Navigator = StackNavigator(
  {
    FilmList: FilmListScreen,
    FilmDetails: FilmDetailsScreen,
    Poster: PosterScreen,
    About: AboutScreen
  },
  navigatorOptions
)

const omdbViewer = ({ toast }) => (
  <React.Fragment>
    <Toaster message={toast} />
    <Navigator />
  </React.Fragment>
)

omdbViewer.propTypes = {
  toast: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default connect(state => ({
  toast: state.toast
}))(omdbViewer)
