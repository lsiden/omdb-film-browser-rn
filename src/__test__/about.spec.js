import React from "react"
import renderer from "react-native-test-utils"

import { about as About } from "../about"

const defaultProps = () => ({
  dispatchToPrev: jest.fn()
})

const createWrapper = () => renderer(<About {...{ ...defaultProps() }} />)

it("renders list of titles", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
