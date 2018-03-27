import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import ActionTypes from "actions/types"
import makeDebug from "util/debug"

const debug = makeDebug("store")

const initialState = {
  screen: ActionTypes.VIEW_FILM_LIST
}
const store = createStore(reduce, compose(applyMiddleware(thunk)))

export const getStore = () => store
export const getState = store.getState

export function reduce(state = initialState, action) {
  debug("action", action)
  const { type, data } = action
  switch (type) {
    case ActionTypes.VIEW_FILM_LIST:
    case ActionTypes.VIEW_FILM_DETAILS:
    case ActionTypes.UPDATE_FILMS:
    case ActionTypes.VIEW_POSTER:
    case ActionTypes.VIEW_ABOUT:
    case ActionTypes.UPDATE_FILM_DETAILS:
    case ActionTypes.UPDATE_TOAST:
    case ActionTypes.UPDATE_IS_FETCHING:
      return { ...state, ...data }
    default:
      return state
  }
}
