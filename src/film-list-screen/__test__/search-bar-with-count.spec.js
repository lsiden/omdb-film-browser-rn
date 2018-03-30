import React from "react"
import renderer from "react-native-test-utils"

import SeearchBarWithCount from "../search-bar-with-count"

jest.mock("components/search-bar", () => "SearchBar")

const defaultProps = () => {
  return {
    totalResults: 99
  }
}

const createWrapper = (props = {}) =>
  renderer(<SeearchBarWithCount {...{ ...defaultProps(), ...props }} />)

it("renders list of titles", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
