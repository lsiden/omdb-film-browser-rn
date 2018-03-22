import React from "react"
import renderer from "react-native-test-utils"

import { backButton as BackButton } from "../back-button"

let dispatchViewList

const defaultProps = () => {
  dispatchViewList = jest.fn()
  return {
    dispatchViewList,
  }
}

const createWrapper = (props = {}) =>
  renderer(<BackButton {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})

// Can't simulate press
it.skip("invokes dispatchViewList when pressed", () => {
  const wrapper = createWrapper()
  wrapper.simulate("press")
  expect(dispatchViewList).toHaveBeenCalledTimes(1)
})
