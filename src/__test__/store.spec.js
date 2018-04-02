import ActionTypes from "../actions/types"
import { reduce } from "../store"

test("reduce() reduces all actions", () => {
  const data = { foo: "bar" }
  Object.values(ActionTypes)
    .filter(action => action !== ActionTypes.APPEND_FILMS)
    .forEach(type => {
      const action = { type, data }
      expect(reduce({}, action)).toEqual({ ...action.data })
    })
})

test("reduce({APPEND_FILMS, pageNum > 1}) appends films to existing list", () => {
  const state = {
    films: [1, 2, 3],
    pageNum: 1,
    totalResults: 99
  }
  const action = {
    type: ActionTypes.APPEND_FILMS,
    data: {
      films: [4, 5, 6]
    }
  }
  expect(reduce(state, action)).toMatchObject({
    films: [1, 2, 3, 4, 5, 6],
    totalResults: 99
  })
})
