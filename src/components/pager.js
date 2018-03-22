import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { View } from "react-native"
import { Button, Icon } from "react-native-elements"

import {
  REWIND_PAGES_CHAR,
  PAGER_FAST_FWD_CHAR,
  PREV_PAGE_CHAR,
  FAST_FWD_PAGES_CHAR,
} from "constants"
import { fetchPage } from "actions"
import { pagerStyles } from "styles"
import { RESULTS_PER_PAGE } from "constants"

const icon = (name, disabled) => ({
  name,
  type: "material-community",
  size: 25,
  color: disabled ? "gray" : "black",
})

const btnStyle = {
  backgroundColor: "transparent",
  height: 40,
}

export const pager = props => {
  const { pageNum, totalResults, dispatchFetchPage } = props
  const lastPage = Math.floor(totalResults / 10) + 1
  const isFirstPage = n => n == 1
  const isLastPage = n => n == lastPage
  return (
    <View style={pagerStyles.wrapper}>
      <Button
        icon={icon("skip-backward", isFirstPage(pageNum))}
        onPress={() => dispatchFetchPage(1)}
        disabled={isFirstPage(pageNum)}
        buttonStyle={btnStyle}
      />
      <Button
        icon={icon("step-backward", isFirstPage(pageNum))}
        onPress={() => dispatchFetchPage(pageNum - 1)}
        disabled={isFirstPage(pageNum)}
        buttonStyle={btnStyle}
      />
      <Button
        icon={icon("step-forward", isLastPage(pageNum))}
        onPress={() => dispatchFetchPage(pageNum + 1)}
        disabled={isLastPage(pageNum)}
        buttonStyle={btnStyle}
      />
      <Button
        icon={icon("skip-forward", isLastPage(pageNum))}
        onPress={() => dispatchFetchPage(lastPage)}
        disabled={isLastPage(pageNum)}
        buttonStyle={btnStyle}
      />
    </View>
  )
}

pager.propTypes = {
  pageNum: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  dispatchFetchPage: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    pageNum: state.pageNum,
    totalResults: state.totalResults,
  }),
  dispatch => ({
    dispatchFetchPage: pageNum => dispatch(fetchPage(pageNum)),
  })
)(pager)
