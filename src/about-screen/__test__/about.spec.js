import React from "react"
import renderer from "react-native-test-utils"

import AboutScreen from "../"

it("renders list of titles", () => {
  const wrapper = renderer(<AboutScreen />)
  expect(wrapper.toJSON()).toMatchSnapshot()
})
