import React from "react"
import App from "./App"

import renderer from "react-native-test-utils"

it("renders", () => {
  const rendered = renderer(<App />).toJSON()
  expect(rendered).toBeTruthy()
})
