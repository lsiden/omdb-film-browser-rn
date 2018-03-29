import React from "react"
import renderer from "react-native-test-utils"

import Banner from "../banner"

const defaultProps = () => {
  return {
    onPressAbout: () => {}
  }
}

const createWrapper = (props = {}) =>
  renderer(<Banner {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
