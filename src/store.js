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

function updateFilms(state, data) {
  if (!state.films || !state.films.length || data.pageNum === 1) {
    return { ...state, ...data }
  } else {
    return {
      ...state,
      films: state.films.concat(data.films),
      pageNum: data.pageNum
    }
  }
}

export function reduce(state = initialState, action) {
  debug("action", action)
  const { type, data } = action
  switch (type) {
    case ActionTypes.UPDATE_FILM_DETAILS:
    case ActionTypes.UPDATE_LAST_PAGENUM_FETCHED:
    case ActionTypes.UPDATE_FETCHING:
    case ActionTypes.UPDATE_TOAST:
      return { ...state, ...data }
    case ActionTypes.UPDATE_FILMS:
      return updateFilms(state, data)
    default:
      return state
  }
}
