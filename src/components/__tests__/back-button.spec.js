import React from "react"
import renderer from "react-native-test-utils"

import BackButton from "../back-button"

let dispatchToPrev

const defaultProps = () => {
  dispatchToPrev = jest.fn()
  return {
    dispatchToPrev,
  }
}

const createWrapper = (props = {}) =>
  renderer(<BackButton {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})

// Can't simulate press
it.skip("invokes dispatchToPrev when pressed", () => {
  const wrapper = createWrapper()
  wrapper.simulate("press")
  expect(dispatchToPrev).toHaveBeenCalledTimes(1)
})