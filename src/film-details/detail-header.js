import React from "react"
import PropTypes from "prop-types"
import { Text, View } from "react-native"
import { connect } from "react-redux"

import { detailStyles as style } from "styles"
import BackButton from "components/back-button"
import { viewFilmList, updateIsFetching } from "actions"

const fillerStyle = { width: 24 }
const fillerTextStyle = { color: "transparent" }
const titleWrapperStyle = { flexDirection: "row", flexWrap: "wrap" }

const Filler = () => (
  <View style={fillerStyle}>
    <Text style={fillerTextStyle}>x</Text>
  </View>
)

export const detailHeader = ({ filmDetails, dispatchToPrev }) => {
  return (
    <View style={style.titleWrapper}>
      <BackButton dispatchToPrev={dispatchToPrev} />
      <View style={titleWrapperStyle}>
        <Text style={style.title}>{filmDetails.Title}</Text>
        <Text style={style.year}>{`  (${filmDetails.Year})`}</Text>
      </View>
      <Filler />
    </View>
  )
}

detailHeader.propTypes = {
  filmDetails: PropTypes.object.isRequired,
  dispatchToPrev: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    filmDetails: state.filmDetails,
  }),
  dispatch => ({
    dispatchToPrev: () => {
      dispatch(updateIsFetching(false))
      dispatch(viewFilmList())
    },
  })
)(detailHeader)
