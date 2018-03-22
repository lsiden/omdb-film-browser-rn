import React from "react"
import renderer from "react-native-test-utils"

import DetailItem from "../detail-item"

jest.mock("react-native")

const newDetail = props => ({
  text: "a detail",
  ...props,
})

const createWrapper = (detailProps = {}) =>
  renderer(<DetailItem detail={newDetail(detailProps)} />)

it("Renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})

it("Renders nothing if cond is false", () => {
  const wrapper = createWrapper({ cond: false })
  expect(wrapper.toJSON()).toMatchSnapshot()
})

it("Renders with url", () => {
  const wrapper = createWrapper({ url: "http://my.url.org" })
  expect(wrapper.toJSON()).toMatchSnapshot()
})
