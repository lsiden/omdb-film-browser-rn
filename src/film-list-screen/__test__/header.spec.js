import React from "react"
import renderer from "react-native-test-utils"

import { header as Header } from "../header"

jest.mock("components/search-bar", () => "SearchBar")

const defaultProps = () => {
  return {
    totalResults: 99
  }
}

const createWrapper = (props = {}) =>
  renderer(<Header {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
