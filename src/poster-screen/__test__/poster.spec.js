import React from "react"
import renderer from "react-native-test-utils"

import PosterScreen from "../"

const defaultProps = () => {
  return {
    navigation: {
      getParam: () => "uri.to.image",
      navigate: () => {}
    }
  }
}

const createWrapper = (props = {}) =>
  renderer(<PosterScreen {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
