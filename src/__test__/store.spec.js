import { Actions } from "../actions"
import { reduce } from "../store"

test("reduce() reduces all actions", () => {
  const data = ["foo", "bar"]
  Object.values(Actions).forEach(type => {
    const action = { type, data }
    expect(reduce({}, action)).toEqual({ ...action.data })
  })
})
