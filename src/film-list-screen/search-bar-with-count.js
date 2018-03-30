import React from "react"
import PropTypes from "prop-types"
import { Text, View } from "react-native"

import SearchBar from "components/search-bar"
import { appStyles as style } from "styles"

const wrapperStyle = {
  borderStyle: "solid",
  borderBottomColor: "black",
  borderBottomWidth: 1
}

const SeearchBarWithCount = ({ totalResults }) => (
  <View style={wrapperStyle}>
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
