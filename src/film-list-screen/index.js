import React from "react"

import FilmList from "./film-list"
import navOpts from "navigation-options"

const FilmListScreen = props => <FilmList {...props} />

FilmListScreen.navigationOptions = ({ navigation }) => ({
  ...navOpts(navigation),
  title: "Search Open Movie Database"
})

export default FilmListScreen
