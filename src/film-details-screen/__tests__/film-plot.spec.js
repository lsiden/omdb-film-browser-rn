import React from "react"
import renderer from "react-native-test-utils"

import { filmPlot as FilmPlot } from "../film-plot"

const filmDetails = require("__fixture__/film-details.json")

const defaultProps = () => {
  return {
    plot: filmDetails.Plot,
  }
}

const createWrapper = (props = {}) =>
  renderer(<FilmPlot {...{ ...defaultProps(), ...props }} />)

it("renders a title", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
