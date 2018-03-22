import React from "react"
import renderer from "react-native-test-utils"

import { filmDetail as FilmDetails } from "film-details"

const films = require("./__fixture__/films.json").Search
const filmDetails = require("./__fixture__/film-details.json")
const filmSummary = films[4]

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
