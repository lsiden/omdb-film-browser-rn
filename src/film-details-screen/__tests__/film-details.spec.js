import React from "react"
import renderer from "react-native-test-utils"

import FilmDetails from "../film-details"

const details = require("__fixture__/film-details.json")

jest.mock("film-details-screen/poster", () => "Poster")
jest.mock("film-details-screen/film-plot", () => "FilmPlot")
jest.mock("film-details-screen/detail-item", () => "DetailItem")

const defaultProps = () => {
  return {
    details,
    onPressPoster: () => {}
  }
}

const createWrapper = (props = {}) =>
  renderer(<FilmDetails {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
