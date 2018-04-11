// Silence the log messages during tests.
// eslint-disable-next-line no-console
console.log = () => {}

jest.mock("redux", () => ({
  getState: () => "getState",
  applyMiddleware: () => "applyMiddleware",
  compose: () => "compose",
  createStore: () => "createStore"
}))

import ActionTypes from "actions/types"
import { reduce } from "../"

test("reduce() reduces all actions", () => {
  const data = { foo: "bar" }
  Object.values(ActionTypes)
    .filter(action => action !== ActionTypes.APPEND_FILMS)
    .forEach(type => {
      const action = { type, data }
      expect(reduce({}, action)).toMatchObject({ ...action.data })
    })
})

const mkFilmItem = imdbID => ({
  imdbID
})

test("reduce({UPDATE_FILMS}) appends films with unique imdbID to new list", () => {
  const state = {
    films: [1, 2, 3].map(id => mkFilmItem(id)),
    pageNum: 1
  }
  const newState = reduce(state, {
    type: ActionTypes.UPDATE_FILMS,
    data: {
      films: [3, 4, 5, 3].map(id => mkFilmItem(id))
    }
  })
  expect(newState.films.map(film => film.imdbID).sort()).toEqual([3, 4, 5])
})

test("reduce({APPEND_FILMS, pageNum > 1}) appends films with unique imdbID to existing list", () => {
  const state = {
    films: [1, 2, 3].map(id => mkFilmItem(id)),
    pageNum: 1
  }
  const newState = reduce(state, {
    type: ActionTypes.APPEND_FILMS,
    data: {
      films: [3, 4, 5].map(id => mkFilmItem(id))
    }
  })
  expect(newState.films.map(film => film.imdbID).sort()).toEqual([
    1,
    2,
    3,
    4,
    5
  ])
})
