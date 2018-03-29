import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { View } from "react-native"
import Toaster from "react-native-toaster"
import { StackNavigator } from "react-navigation"

import FilmListScreen from "film-list-screen"
import FilmDetails from "film-details-screen"
import PosterScreen from "poster-screen"
import AboutScreen from "about-screen"
import { appStyles as style } from "./styles"

const navOptions = {
  initialRouteName: "FilmList"
}

const Navigator = StackNavigator(
  {
    FilmList: FilmListScreen,
    FilmDetails: FilmDetails,
    Poster: PosterScreen,
    About: AboutScreen
  },
  navOptions
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
