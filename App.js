import React from "react"
import { Provider } from "react-redux"

import OmdbViewer from "omdb-viewer"
import { getStore } from "store"

export const app = () => (
  <Provider store={getStore()}>
    <OmdbViewer />
  </Provider>
)

export default app
