import React from "react"
import renderer from "react-native-test-utils"

import ButtonLink from "components/button-link"

let onPress

const defaultProps = () => ({
  onPress,
})

const buttonContents = "Push Me"

const createWrapper = (props = {}) => {
  onPress = jest.fn()
  return renderer(
    <ButtonLink {...{ ...defaultProps(), ...props }}>
      {buttonContents}
    </ButtonLink>
  )
}

it("renders children", () => {
  const wrapper = createWrapper()
  expect(wrapper.toJSON()).toMatchSnapshot()
})

test("click event invokes onPress()", () => {
  const wrapper = createWrapper()
  wrapper.simulate("press")
  expect(onPress).toHaveBeenCalled()
})
