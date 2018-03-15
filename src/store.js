import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

import { Actions } from "actions"

const initialState = {
  view: Actions.VIEW_FILM_LIST,
}
export const store = createStore(reduce, compose(applyMiddleware(thunk)))

export function reduce(state = initialState, action) {
  const { type, data } = action
  switch (type) {
    case Actions.VIEW_FILM_LIST:
    case Actions.VIEW_FILM_DETAIL:
    case Actions.UPDATE_FILMS:
    case Actions.UPDATE_FILM_DETAILS:
    case Actions.UPDATE_TOAST:
      return {
        ...state,
        ...data,
      }
    default:
      return state
  }
}
