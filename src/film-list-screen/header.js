import React from "react"
import PropTypes from "prop-types"
import { Text, View, StyleSheet } from "react-native"
import { connect } from "react-redux"

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

export const header = ({ totalResults, query }) => {
  const msg = query ? `Found ${totalResults} results.` : "Type part of a title."
  return (
    <View style={style.wrapper}>
      <SearchBar />
      <View style={style.messageWrapper}>
        <Text style={style.message}>{msg}</Text>
      </View>
    </View>
  )
}

header.propTypes = {
  totalResults: PropTypes.number.isRequired,
  query: PropTypes.string
}

export default connect(state => ({
  query: state.query
}))(header)
