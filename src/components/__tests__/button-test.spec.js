import React from "react"
import renderer from "react-native-test-utils"
import { Button, Icon } from "react-native-elements"

test("can determine if button is disabled from property", () => {
  const button = renderer(
    <Button icon={<Icon name="arrow-up" />} disabled={true} />
  )
  expect(button.props.disabled).toBeTruthy()
  // console.log("button props", button.props)
})
