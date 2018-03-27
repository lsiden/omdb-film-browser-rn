import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Text, View } from "react-native"

import { detailStyles as style } from "styles"
import BackButton from "components/back-button"
import Filler from "components/filler"
import { viewFilmList, updateIsFetching } from "actions"

const titleWrapperStyle = { flexDirection: "row", flexWrap: "wrap" }

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
