import React from "react"
import renderer from "react-native-test-utils"

import { filmDetail as FilmDetails } from "film-details"

const filmDetails = require("__test__/__fixture__/film-details.json")

jest.mock("film-details/back-button", () => "BackButton")
jest.mock("film-details/detail-header", () => "DetailHeader")
jest.mock("film-details/poster", () => "Poster")
jest.mock("film-details/film-plot", () => "FilmPlot")

let dispatchViewList

const defaultProps = () => {
  dispatchViewList = jest.fn()
  return {
    filmDetails,
    dispatchViewList,
  }
}

const createWrapper = (props = {}) =>
  renderer(<FilmDetails {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
