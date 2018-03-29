import React from "react"
import renderer from "react-native-test-utils"

import BackButton from "../back-button"

const defaultProps = () => {
  return {
    navigation: {
      goBack: () => {}
    }
  }
}

const createWrapper = (props = {}) =>
  renderer(<BackButton {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
