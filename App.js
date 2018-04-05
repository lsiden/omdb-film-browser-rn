import React from "react"
import { Provider } from "react-redux"

import MainApp from "app"
import { getStore } from "store"

export const app = () => (
  <Provider store={getStore()}>
    <MainApp />
  </Provider>
)

export default app
