import React from "react"
import renderer from "react-native-test-utils"

import { filmList as FilmList } from "../"

jest.mock("components/pager")

const films = require("__test__/__fixture__/films.json").Search

jest.mock("film-list/film-list-item", () => "FilmListItem")

const defaultProps = () => {
  const dispatchViewDetail = jest.fn()
  return {
    films,
    dispatchViewDetail,
  }
}

const createWrapper = (props = {}) =>
  renderer(<FilmList {...{ ...defaultProps(), ...props }} />)

it("renders list of titles", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
