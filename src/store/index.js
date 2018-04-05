import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import ActionTypes from "actions/types"

/*
 * I discovered that OMDB search can return some duplicate films.
 * This will cause React to throw a warning when it discovers a duplicate key.
 * So we have to guard against duplicate items.
 */

const reduceUniqueFilms = (uniqueIds, res, film) => {
  const id = film.imdbID

  if (!uniqueIds[id]) {
    res.push(film)
    uniqueIds[id] = id
  }
  return res
}

function updateNewFilms(state, data) {
  const uniqueIds = {}
  const newFilms = data.films || []
  return {
    ...state,
    ...data,
    uniqueIds,
    films: newFilms.reduce(reduceUniqueFilms.bind(null, uniqueIds), [])
  }
}

function appendFilms(state, data) {
  const prevFilms = state.films ? [...state.films] : []
  const uniqueIds =
    state.uniqueIds ||
    prevFilms.reduce((res, film) => {
      const id = film.imdbID

      if (!res[id]) {
        res[id] = id
      }
      return res
    }, {})
  const newFilms = data.films || []
  return {
    ...state,
    ...data,
    uniqueIds,
    films: newFilms.reduce(reduceUniqueFilms.bind(null, uniqueIds), prevFilms)
  }
}

export function reduce(state = {}, action) {
  // eslint-disable-next-line no-console
  console.log("reduce(), action=", action.type)
  const { type, data } = action
  switch (type) {
    case ActionTypes.UPDATE_FILM_DETAILS:
    case ActionTypes.UPDATE_LAST_PAGENUM_FETCHED:
    case ActionTypes.UPDATE_FETCHING:
    case ActionTypes.UPDATE_TOAST:
      return { ...state, ...data }
    case ActionTypes.UPDATE_FILMS:
      return updateNewFilms(state, data)
    case ActionTypes.APPEND_FILMS:
      return appendFilms(state, data)
    default:
      return state
  }
}

const store = createStore(reduce, compose(applyMiddleware(thunk)))

export const getStore = () => store
export const getState = store.getState
