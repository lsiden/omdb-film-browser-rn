import React from "react"
import renderer from "react-native-test-utils"

import { filmList as FilmList } from "film-list"

const films = require("./__fixture__/films.json").Search
const defaultProps = () => ({
  films,
})

// jest.mock("FilmTitle", () => "FilmTitle")
jest.mock("film-title")

const createWrapper = (props = {}) =>
  renderer(<FilmList {...{ ...defaultProps(), ...props }} />)

it("renders list of titles", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
