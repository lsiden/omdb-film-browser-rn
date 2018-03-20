import React from "react"
import renderer from "react-native-test-utils"

import { filmTitle as FilmTitle } from "film-title"

const films = require("./__fixture__/films.json").Search
let dispatchViewDetail

const defaultProps = () => {
  dispatchViewDetail = jest.fn()
  return {
    filmSummary: films[0],
    dispatchViewDetail,
  }
}

jest.mock("TouchableHighlight", () => {
  const mockComponent = require("jest-react-native")
  return mockComponent("TouchableHighlight")
})

const createWrapper = (props = {}) =>
  renderer(<FilmTitle {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})

test("click on title invokes dispatchViewDetail()", () => {
  const wrapper = createWrapper()
  wrapper.props.onPress()
  expect(dispatchViewDetail).toHaveBeenCalled()
})
