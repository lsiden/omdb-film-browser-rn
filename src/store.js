import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import ActionTypes from "actions/types"

/*
 * I discovered that OMDB search can return some duplicate films.
 * This will cause React to throw a warning when it discovers a duplicate key.
 * So we have to guard against duplicate items.
 */
const addUniqueId = (res, film) => {
  const id = film.imdbID
  res[id] = id
  return res
}

const filmIsUnique = (uniqueIds, film) => {
  const id = film.imdbID
  const result = !uniqueIds[id]
  uniqueIds[id] = id
  return result
}

function updateFilms(state, data) {
  const dataFilms = data.films || []
  const uniqueIds = {}
  const films = dataFilms.filter(film => filmIsUnique(uniqueIds, film))
  return {
    ...state,
    ...data,
    films,
    uniqueIds
  }
}

function appendFilms(state, data) {
  const stateFilms = state.films || []
  const dataFilms = data.films || []
  const uniqueIds = state.uniqueIds || stateFilms.reduce(addUniqueId, {})
  const newFilms = dataFilms.filter(film => filmIsUnique(uniqueIds, film))
  return {
    ...state,
    ...data,
    films: [...stateFilms, ...newFilms],
    uniqueIds: dataFilms.reduce(addUniqueId, { ...uniqueIds })
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
      return updateFilms(state, data)
    case ActionTypes.APPEND_FILMS:
      return appendFilms(state, data)
    default:
      return state
  }
}

const store = createStore(reduce, compose(applyMiddleware(thunk)))

export const getStore = () => store
export const getState = store.getState
