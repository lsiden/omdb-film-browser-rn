import React from "react"
import { Provider } from "react-redux"

import { Actions } from "actions"

import OmdbViewer from "omdb-viewer"
import store from "store"

export const app = () => (
  <Provider store={store}>
    <OmdbViewer />
  </Provider>
)

export default app
