import React from "react"
import renderer from "react-native-test-utils"

import { filmList as FilmList } from "../film-list"

const films = require("__fixture__/films.json").Search

jest.mock("../film-list-item", () => "FilmListItem")
jest.mock("../header", () => "Header")
jest.mock("../footer", () => "Footer")

const defaultProps = () => {
  return {
    films,
    pageNum: 1,
    isFetching: false,
    dispatchFetchPage: () => {},
    dispatchFetchFilmDetails: () => {},
    dispatchResetFilmDetails: () => {},
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
