import React from "react"
import renderer from "react-native-test-utils"

import { pager as Pager } from "../pager"

const defaultProps = () => ({
  totalResults: 50,
  lastPage: 5,
  dispatchFetchPage: () => {},
})

const createWrapper = (props = {}) =>
  renderer(<Pager {...{ ...defaultProps(), ...props }} />)

test("first page", () => {
  const wrapper = createWrapper({ pageNum: 1 })
  expect(wrapper).toMatchSnapshot()
})

test("last page", () => {
  const wrapper = createWrapper({ pageNum: 5, lastPage: 5 })
  expect(wrapper).toMatchSnapshot()
})

test("internal page", () => {
  const wrapper = createWrapper({ pageNum: 3, lastPage: 5 })
  expect(wrapper).toMatchSnapshot()
})
