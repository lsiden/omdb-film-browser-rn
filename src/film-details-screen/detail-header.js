import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Text, View } from "react-native"

import { detailStyles as style } from "styles"
import Filler from "components/filler"

const titleWrapperStyle = { flexDirection: "row", flexWrap: "wrap" }

export const detailHeader = ({ filmDetails }) => {
  return (
    <View style={style.titleWrapper}>
      <View style={titleWrapperStyle}>
        <Text style={style.title}>{filmDetails.Title}</Text>
        <Text style={style.year}>{`  (${filmDetails.Year})`}</Text>
      </View>
      <Filler />
    </View>
  )
}

detailHeader.propTypes = {
  filmDetails: PropTypes.object.isRequired
}

export default connect(state => ({
  filmDetails: state.filmDetails
}))(detailHeader)
