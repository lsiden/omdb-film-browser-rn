import React from "react"
import renderer from "react-native-test-utils"
import { Text } from "react-native"

import Show from "../show"

const createWrapper = (props = {}) => renderer(<Show {...props} />)

const children = <Text>{"some content"}</Text>

it("does not render children when condition is falsy", () => {
  const wrapper = createWrapper({
    when: false,
    children,
  })
  expect(wrapper.toJSON()).toBeFalsy()
})

it("renders children when condition is truthy", () => {
  const wrapper = createWrapper({
    when: true,
    children,
  })
  expect(wrapper.toJSON()).toBeTruthy()
  expect(wrapper.toJSON()).toMatchSnapshot()
})
