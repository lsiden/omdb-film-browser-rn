import React from "react"
import renderer from "react-native-test-utils"

import { detailHeader as DetailHeader } from "../detail-header"

const filmDetails = require("__test__/__fixture__/film-details.json")

const defaultProps = () => {
  return {
    filmDetails,
    dispatchToPrev: jest.fn(),
  }
}

const createWrapper = (props = {}) =>
  renderer(<DetailHeader {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
