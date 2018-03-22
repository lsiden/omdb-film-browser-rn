import React from "react"
import renderer from "react-native-test-utils"

import { filmDetail as FilmDetails } from "film-details"

const films = require("__test__/__fixture__/films.json").Search
const filmDetails = require("__test__/__fixture__/film-details.json")
const filmSummary = films[4]

jest.mock("film-details/back-button", () => "BackButton")
jest.mock("film-details/detail-header", () => "DetailHeader")
jest.mock("film-details/poster", () => "Poster")

let dispatchViewList

const defaultProps = () => {
  dispatchViewList = jest.fn()
  return {
    filmSummary,
    filmDetails,
    dispatchViewList,
  }
}

const createWrapper = (props = {}) =>
  renderer(<FilmDetails {...{ ...defaultProps(), ...props }} />)

it("renders a title", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
