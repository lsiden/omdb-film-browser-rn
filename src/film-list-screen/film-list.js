import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { TouchableOpacity, Text, View } from "react-native"
import { List, ListItem } from "react-native-elements"

import Pager from "components/pager"
import { appStyles as style } from "styles"

export const filmList = ({ films, totalResults, navigation }) => (
  <View>
    <View style={style.messageWrapper}>
      <Text style={style.message}>{`Found ${totalResults} results.`}</Text>
    </View>
    <List>
      {films.map(filmSummary => (
        <TouchableOpacity
          key={filmSummary.imdbID}
          onPress={() => navigation.navigate("Details", { filmSummary })}
        >
          <ListItem title={filmSummary.Title} subtitle={filmSummary.Year} />
        </TouchableOpacity>
      ))}
    </List>
    <Pager />
  </View>
)

filmList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
  totalResults: PropTypes.number,
  navigation: PropTypes.object.isRequired
}
filmList.defaultProps = {
  films: []
}

export default connect(state => ({
  films: state.films || [],
  totalResults: state.totalResults || 0
}))(filmList)
