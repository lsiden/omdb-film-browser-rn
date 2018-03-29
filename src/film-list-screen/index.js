import React from "react"
import { View } from "react-native"

import SearchBar from "components/search-bar"
import FilmList from "./film-list"
import navOpts from "navigation-options"

const FilmListScreen = props => (
  <View>
    <SearchBar />
    <FilmList {...props} />
  </View>
)

FilmListScreen.navigationOptions = ({ navigation }) => ({
  ...navOpts(navigation),
  title: "Search Open Movie Database"
})

export default FilmListScreen
