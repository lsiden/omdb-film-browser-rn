import React from "react"
import renderer from "react-native-test-utils"

import { fullScreenPoster as FullScreenPoster } from "full-screen-poster"

jest.mock("full-screen-poster/back-button", () => "BackButton")

const defaultProps = () => {
  return {
    uri: "https://my.url.org",
  }
}

const createWrapper = (props = {}) =>
  renderer(<FullScreenPoster {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})