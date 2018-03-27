import React from "react"
import PropTypes from "prop-types"
import { Text, View } from "react-native"
import { connect } from "react-redux"

import { detailStyles } from "styles"
import backButton from "components/back-button"
import { viewFilmList, updateIsFetching } from "actions"

const mapDispatchToButtonProps = dispatch => ({
  dispatchToPrev: () => {
    dispatch(updateIsFetching(false))
    dispatch(viewFilmList())
  },
})
const BackButton = connect(null, mapDispatchToButtonProps)(backButton)

export const detailHeader = props => {
  const { filmDetails } = props
  return (
    <View style={detailStyles.titleWrapper}>
      <BackButton />
      <Text style={detailStyles.title}>{filmDetails.Title}</Text>
      <Text style={detailStyles.year}>{`  (${filmDetails.Year})`}</Text>
    </View>
  )
}

detailHeader.propTypes = {
  filmDetails: PropTypes.object.isRequired,
}

export default connect(state => ({
  filmDetails: state.filmDetails,
}))(detailHeader)
