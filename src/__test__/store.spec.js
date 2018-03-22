import ActionTypes from "../actions/types"
import { reduce } from "../store"

test("reduce() reduces all actions", () => {
  const data = ["foo", "bar"]
  Object.values(ActionTypes).forEach(type => {
    const action = { type, data }
    expect(reduce({}, action)).toEqual({ ...action.data })
  })
})
