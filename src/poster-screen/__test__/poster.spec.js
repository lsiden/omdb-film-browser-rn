import React from "react"
import renderer from "react-native-test-utils"

import { posterScreen as PosterScreen } from "../"

const defaultProps = () => {
  return {
    navigation: {
      state: {
        uri: "https://my.url.org"
      },
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
