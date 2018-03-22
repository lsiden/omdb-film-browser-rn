import React from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"
import { View, Text } from "react-native"
import { Button, Icon } from "react-native-elements"

import {
  REWIND_PAGES_CHAR,
  PAGER_FAST_FWD_CHAR,
  PREV_PAGE_CHAR,
  FAST_FWD_PAGES_CHAR,
} from "constants"
import { fetchPage } from "actions/fetch"
import { pagerStyles, appStyles } from "styles"

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

const formatNumber = num => Number.toLocaleString(num)

export const pager = props => {
  const { pageNum, totalResults, lastPage, dispatchFetchPage } = props
  const isFirstPage = n => n == 1
  const isLastPage = n => n == lastPage
  return (
    lastPage > 1 && (
      <View style={pagerStyles.wrapper}>
        <View style={pagerStyles.buttons}>
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
        <Text style={[appStyles.message, { textAlign: "center" }]}>
          {`On page ${pageNum.toLocaleString()} of ${lastPage.toLocaleString()}`}
        </Text>
      </View>
    )
  )
}

pager.propTypes = {
  pageNum: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  dispatchFetchPage: PropTypes.func.isRequired,
}

export default connect(
  state => ({
    pageNum: state.pageNum,
    totalResults: state.totalResults,
    lastPage: state.lastPage,
  }),
  dispatch => ({
    dispatchFetchPage: pageNum => dispatch(fetchPage(pageNum)),
  })
)(pager)
