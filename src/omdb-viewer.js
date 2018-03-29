import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import Toaster from "react-native-toaster"
import { StackNavigator } from "react-navigation"
import { View } from "react-native"

import FilmListScreen from "film-list-screen"
import FilmDetails from "film-details-screen"
import PosterScreen from "poster-screen"
import AboutScreen from "about-screen"
import { appStyles as style } from "./styles"
import navOpts from "navigation-options"

const navigatorOptions = ({ navigation }) => ({
  initialRouteName: "FilmList",
  navigationOptions: navOpts(navigation)
})

const Navigator = StackNavigator(
  {
    FilmList: FilmListScreen,
    FilmDetails: FilmDetails,
    Poster: PosterScreen,
    About: AboutScreen
  },
  navigatorOptions
)

const omdbViewer = ({ toast }) => (
  <View style={style.wrapper}>
    <Toaster message={toast} />
    <Navigator />
  </View>
)

omdbViewer.propTypes = {
  toast: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
}

export default connect(state => ({
  toast: state.toast
}))(omdbViewer)
