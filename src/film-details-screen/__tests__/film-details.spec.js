import React from "react"
import renderer from "react-native-test-utils"

import { filmDetails as FilmDetails } from "../film-details"

const details = require("__test__/__fixture__/film-details.json")

jest.mock("film-details-screen/detail-header", () => "DetailHeader")
jest.mock("film-details-screen/poster", () => "Poster")
jest.mock("film-details-screen/film-plot", () => "FilmPlot")
jest.mock("film-details-screen/detail-item", () => "DetailItem")

const defaultProps = () => {
  return {
    details,
    dispatchViewList: jest.fn()
  }
}

const createWrapper = (props = {}) =>
  renderer(<FilmDetails {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
