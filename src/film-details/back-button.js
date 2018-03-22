import React from "react"
import { Text, TouchableOpacity } from "react-native"
import PropTypes from "prop-types"
import { connect } from "react-redux"

import { detailStyles } from "styles"
import { LEFT_TRIANGLE } from "constants"
import { viewList } from "actions"

export const backButton = ({ dispatchViewList }) => (
  <TouchableOpacity onPress={dispatchViewList}>
    <Text style={detailStyles.buttonText}>{LEFT_TRIANGLE}</Text>
  </TouchableOpacity>
)
backButton.propTypes = {
  dispatchViewList: PropTypes.func.isRequired,
}

export default connect(null, dispatch => ({
  dispatchViewList: () => dispatch(viewList),
}))(backButton)
