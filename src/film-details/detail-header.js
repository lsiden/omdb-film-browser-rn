import React from "react"
import PropTypes from "prop-types"
import { Text, View } from "react-native"

import BackButton from "./back-button"
import { detailStyles } from "styles"

const DetailHeader = props => {
  const { filmSummary } = props
  return (
    <View style={detailStyles.header}>
      <BackButton />
      <View style={detailStyles.titleWrapper}>
        <Text style={detailStyles.title}>{filmSummary.Title}</Text>
        <Text style={detailStyles.year}>{`  (${filmSummary.Year})`}</Text>
      </View>
    </View>
  )
}
DetailHeader.propTypes = {
  filmSummary: PropTypes.object.isRequired,
}
export default DetailHeader
