import React from "react"
import renderer from "react-native-test-utils"

import { filmList as FilmList } from "../film-list"

jest.mock("components/pager")

const films = require("__test__/__fixture__/films.json").Search

const defaultProps = () => {
  return {
    films,
    navigation: {
      navigate: () => {}
    }
  }
}

const createWrapper = (props = {}) =>
  renderer(<FilmList {...{ ...defaultProps(), ...props }} />)

it("renders list of titles", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
