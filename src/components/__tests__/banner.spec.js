import React from "react"
import renderer from "react-native-test-utils"

import { banner as Banner } from "../banner"

const defaultProps = () => {
  return {
    displayInfoIcon: false,
    dispatchViewAbout: jest.fn(),
  }
}

const createWrapper = (props = {}) =>
  renderer(<Banner {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
