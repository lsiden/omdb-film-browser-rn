import React from "react"
import { shallow } from "enzyme"

import "../test-helpers/setup"
import { FilmDetail } from "film-detail"

const films = require("./__fixture__/films.json").Search
let dispatchViewList

const defaultProps = () => {
  dispatchViewList = jest.fn()
  return {
    filmSummary: films[0],
    dispatchViewList,
  }
}

const createWrapper = (props = {}) =>
  shallow(<FilmDetail {...{ ...defaultProps(), ...props }} />)

it("renders a title", () => {
  const wrapper = createWrapper()
  // console.log(wrapper.toTree().rendered.rendered[0].rendered[0].rendered[0])
  expect(wrapper.text()).toEqual(expect.stringContaining(films[0].Title))
})
