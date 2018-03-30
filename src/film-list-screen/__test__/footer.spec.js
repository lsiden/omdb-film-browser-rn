import React from "react"
import renderer from "react-native-test-utils"

import { footer as Footer } from "../footer"

const createWrapper = (props = {}) => renderer(<Footer {...props} />)

it("renders nothing if isFetching is false", () => {
  const wrapper = createWrapper({ isFetching: false })
  expect(wrapper.toJSON()).toMatchSnapshot()
})

it("renders ActivityIndicator if isFetching is true", () => {
  const wrapper = createWrapper({ isFetching: true })
  expect(wrapper.toJSON()).toMatchSnapshot()
})
