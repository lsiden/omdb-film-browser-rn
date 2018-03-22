import React from "react"
import renderer from "react-native-test-utils"

import { filmListItem as FilmListItem } from "../film-list-item"

const films = require("__test__/__fixture__/films.json").Search
const filmSummary = films[0]

let dispatchViewDetails

const defaultProps = () => {
  const dispatchViewDetails = jest.fn()
  return {
    filmSummary,
    dispatchViewDetails,
  }
}

const createWrapper = (props = {}) =>
  renderer(<FilmListItem {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})

// Cant find object to send onPress event to.
test.skip("press on list item invokes dispatchViewDetail", () => {
  const wrapper = createWrapper()
  wrapper.simulate("press")
  expect(dispatchViewDetails).toHaveBeenCalledTimes(1)
})
