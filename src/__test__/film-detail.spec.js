import React from "react"
import renderer from "react-native-test-utils"

import { filmDetail as FilmDetail } from "film-detail"

const films = require("./__fixture__/films.json").Search
const film0 = films[0]

let dispatchViewList

const defaultProps = () => {
  dispatchViewList = jest.fn()
  return {
    filmSummary: film0,
    dispatchViewList,
  }
}

const createWrapper = (props = {}) =>
  renderer(<FilmDetail {...{ ...defaultProps(), ...props }} />)

it("renders a title", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
