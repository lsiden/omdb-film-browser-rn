import React from "react"
import { shallow } from "enzyme"

import "../../test-helpers/setup"
import { SearchInput } from "components/search-input"

let onInput

const defaultProps = () => ({
  id: "element-id",
  placeholder: "x",
  value: "foobar",
  onInput,
})

const createWrapper = (props = {}) => {
  onInput = jest.fn()
  return shallow(<SearchInput {...{ ...defaultProps(), ...props }} />)
}

test("change to input invokes onChange(query)", () => {
  const wrapper = createWrapper()
  const query = "search term"
  const inputEvent = {
    target: {
      value: query,
    },
  }
  wrapper.find("input").simulate("input", inputEvent)
  setTimeout(() => {
    expect(onInput).toHaveBeenCalledWith(inputEvent)
  })
})
