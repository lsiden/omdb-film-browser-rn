import React from "react"
import renderer from "react-native-test-utils"

import { CloseButton } from "components/close-button"

let onPress

const defaultProps = () => {
  onPress = jest.fn()
  return {
    onPress,
  }
}

const createWrapper = (props = {}) =>
  renderer(<CloseButton {...{ ...defaultProps(), ...props }} />)

test("renders()", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
