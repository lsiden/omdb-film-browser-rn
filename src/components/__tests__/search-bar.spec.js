import React from "react"
import renderer from "react-native-test-utils"

import { searchBar as SearchBar } from "../search-bar"

let dispatchQuery

jest.useFakeTimers()

const defaultProps = () => {
  dispatchQuery = jest.fn()
  return { dispatchQuery }
}
const createWrapper = (props = {}) =>
  renderer(<SearchBar {...{ ...defaultProps(), ...props }} />)

it("renders", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})

it("responds to change in input only after delay", () => {
  const delay = 555
  const wrapper = createWrapper({ delay })
  wrapper.instance().onChangeText("foo")
  expect(setTimeout).toHaveBeenCalledTimes(1)
  expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), delay)
})

test("onTimeout() invokes dispatchQuery()", () => {
  const wrapper = createWrapper()
  const instance = wrapper.instance()
  instance.setState({ query: "a query" })
  instance.onTimeout()
  expect(dispatchQuery).toHaveBeenCalled()
})

test("onTimeout() does not invoke dispatchQuery() if state.query is empty", () => {
  const wrapper = createWrapper()
  wrapper.instance().onTimeout()
  expect(dispatchQuery).not.toHaveBeenCalled()
})
