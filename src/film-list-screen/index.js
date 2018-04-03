import React from "react"

import FilmList from "./film-list"
import navOpts from "navigation-options"

const FilmListScreen = props => <FilmList {...props} />

FilmListScreen.navigationOptions = ({ navigation }) => {
  const baseOpts = navOpts(navigation)
  return {
    ...baseOpts,
    title: "Search Open Movie Database",
    headerTitleStyle: {
      ...baseOpts.headerTitleStyle,
      alignSelf: "center",
      marginLeft: 40
    }
  }
}

export default FilmListScreen
