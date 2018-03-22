import React from "react"
import renderer from "react-native-test-utils"

import { pager as Pager } from "../pager"

let wrapper, rewindBtn, prevBtn, nextBtn, skipToLastBtn

const defaultProps = () => ({
  totalResults: 50,
  pageNum: 1,
  dispatchFetchPage: () => {},
})

const createWrapper = (props = {}) =>
  renderer(<Pager {...{ ...defaultProps(), ...props }} />)

const init = (props = {}) => {
  wrapper = createWrapper(props)
  console.log(
    "wrapper",
    wrapper.queryAll("View").filter(item => item.props.accessible)
  )
  const buttons = wrapper.queryAll("Text")
  ;[rewindBtn, prevBtn, nextBtn, skipToLastBtn] = buttons
}

// react-native-elements.Button is not testable
test.skip("first and back buttons are disabled when on first page", () => {
  init()
  expect(rewindBtn.props.disabled).toBeTruthy()
  expect(prevBtn.props.disabled).toBeTruthy()
  expect(nextBtn.props.disabled).toBeFalsy()
  expect(skipToLastBtn.props.disabled).toBeFalsy()
})

// test("next and last buttons are disabled when on last page")
test.skip("no buttons are disabled when not on first or last page", () => {
  init()
  expect(rewindBtn.props.disabled).toBeFalsy()
  expect(prevBtn.props.disabled).toBeFalsy()
  expect(nextBtn.props.disabled).toBeTruthy()
  expect(skipToLastBtn.props.disabled).toBeTruthy()
})
