import React from "react"
import PropTypes from "prop-types"
import { Text, View } from "react-native"
import { connect } from "react-redux"

import { detailStyles } from "styles"
import BackButton from "./back-button"

export const detailHeader = props => {
  const { filmDetails } = props
  return (
    <View style={detailStyles.header}>
      <BackButton />
      <View style={detailStyles.titleWrapper}>
        <Text style={detailStyles.title}>{filmDetails.Title}</Text>
        <Text style={detailStyles.year}>{`  (${filmDetails.Year})`}</Text>
      </View>
    </View>
  )
}

detailHeader.propTypes = {
  filmDetails: PropTypes.object.isRequired,
}

export default connect(state => ({
  filmDetails: state.filmDetails,
}))(detailHeader)
