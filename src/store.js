import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import ActionTypes from "actions/types"

function appendFilms(state, data) {
  const films = state.films || []
  const newFilms = data.films || []
  return {
    ...state,
    films: [...films, ...newFilms]
  }
}

export function reduce(state = {}, action) {
  console.log("action", action.type)
  const { type, data } = action
  switch (type) {
    case ActionTypes.UPDATE_FILM_DETAILS:
    case ActionTypes.UPDATE_LAST_PAGENUM_FETCHED:
    case ActionTypes.UPDATE_FETCHING:
    case ActionTypes.UPDATE_TOAST:
    case ActionTypes.UPDATE_FILMS:
      return { ...state, ...data }
    case ActionTypes.APPEND_FILMS:
      return appendFilms(state, data)
    default:
      return state
  }
}

const store = createStore(reduce, compose(applyMiddleware(thunk)))

export const getStore = () => store
export const getState = store.getState
