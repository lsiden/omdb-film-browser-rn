import React from "react"
import renderer from "react-native-test-utils"

import { about as About } from "../"

const defaultProps = () => {
  return {
    dispatchToPrev: jest.fn(),
  }
}

const createWrapper = (props = {}) =>
  renderer(<About {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
