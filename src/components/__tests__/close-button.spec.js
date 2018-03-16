import React from "react"
import { shallow } from "enzyme"

import "../../test-helpers/setup"
import { CloseButton } from "components/close-button"

let onClick

const defaultProps = () => {
  onClick = jest.fn()
  return {
    onClick,
  }
}

const createWrapper = (props = {}) =>
  shallow(<CloseButton {...{ ...defaultProps(), ...props }} />)

test("click on close invokes onClick()", () => {
  const wrapper = createWrapper()
  wrapper.simulate("click")
  expect(onClick).toHaveBeenCalled()
})
