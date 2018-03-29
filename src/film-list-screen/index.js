import React from "react"
import PropTypes from "prop-types"
import { Icon } from "react-native-elements"
import { TouchableHighlight, Image, View, Text } from "react-native"

import SearchBar from "components/search-bar"
import FilmList from "./film-list"
import { primaryColor } from "styles"

const FilmListScreen = props => (
  <View>
    <SearchBar />
    <FilmList {...props} />
  </View>
)
const Title = ({ style, children }) => <Text style={style}>{children}</Text>
Title.propTypes = {
  style: PropTypes.object.isRequired,
  children: PropTypes.any.isRequired
}

FilmListScreen.navigationOptions = ({ navigation }) => ({
  title: "Search Open Movie Database",
  headerLeft: (
    <Image source={require("assets/film-reel-48-white-on-primary.png")} />
  ),
  headerRight: (
    <TouchableHighlight onPress={() => navigation.navigate("About")}>
      <Icon name={"info-outline"} color={"white"} />
    </TouchableHighlight>
  ),
  // headerTransparent: true,
  headerStyle: {
    backgroundColor: primaryColor
  },
  headerTitleStyle: {
    color: "white",
    fontSize: 16
  }
})

FilmListScreen.propTypes = {
  navigation: PropTypes.object.isRequired
}

export default FilmListScreen
