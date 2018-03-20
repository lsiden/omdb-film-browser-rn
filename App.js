import React from "react"
import { Provider } from "react-redux"

import { Actions } from "actions"

import { omdbViewer as OmdbViewer } from "omdb-viewer" // FIXME replace with default
import store from "store"

export const app = () => (
  <Provider store={store}>
    <OmdbViewer view={Actions.VIEW_FILM_LIST} />
  </Provider>
)

export default app
