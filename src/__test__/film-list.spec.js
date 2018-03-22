import React from "react"
import renderer from "react-native-test-utils"

import { filmList as FilmList } from "film-list"

jest.mock("components/pager")

const films = require("./__fixture__/films.json").Search

let dispatchViewDetail

const defaultProps = () => {
  const dispatchViewDetail = jest.fn()
  return {
    films,
    dispatchViewDetail,
  }
}

const createWrapper = (props = {}) =>
  renderer(<FilmList {...{ ...defaultProps(), ...props }} />)

it("renders list of titles", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})

test.skip("press on list item invokes dispatchViewDetail", () => {
  const wrapper = createWrapper()
  wrapper.query("[key]").simulate("press")
  expect(dispatchViewDetail).toHaveBeenCalledTimes(1)
})
