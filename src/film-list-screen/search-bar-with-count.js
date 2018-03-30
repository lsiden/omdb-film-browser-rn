import React from "react"
import PropTypes from "prop-types"
import { Text, View, StyleSheet } from "react-native"
import SearchBar from "components/search-bar"

const style = StyleSheet.create({
  wrapper: {
    borderStyle: "solid",
    borderBottomColor: "black",
    borderBottomWidth: 1
  },
  message: {
    fontSize: 14
  },
  messageWrapper: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 20
  }
})

const SeearchBarWithCount = ({ totalResults }) => (
  <View style={style.wrapper}>
    <SearchBar />
    <View style={style.messageWrapper}>
      <Text style={style.message}>{`Found ${totalResults} results.`}</Text>
    </View>
  </View>
)
SeearchBarWithCount.propTypes = {
  totalResults: PropTypes.number.isRequired
}

export default SeearchBarWithCount
