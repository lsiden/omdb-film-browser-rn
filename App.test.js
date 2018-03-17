import React from "react"
import App from "./App"

import renderer from 'react-native-test-utils'

test("renders without crashing", () => {
  const rendered = renderer(<App />).toJSON()
  expect(rendered).toBeTruthy()
})
