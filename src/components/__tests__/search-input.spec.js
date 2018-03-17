import React from "react"
import renderer from "react-native-test-utils"

import { SearchInput } from "components/search-input"

let onChangeText

const defaultProps = () => ({
  id: "element-id",
  placeholder: "x",
  value: "foobar",
  onChangeText,
})

const createWrapper = (props = {}) => {
  onChangeText = jest.fn()
  return renderer(<SearchInput {...{ ...defaultProps(), ...props }} />)
}

test("change to input invokes onChange(query)", () => {
  const wrapper = createWrapper()
  const query = "search term"
  wrapper.query("TextInput").simulate("changeText", query)
  setTimeout(() => {
    expect(onChangeText).toHaveBeenCalledWith(query)
  })
})
