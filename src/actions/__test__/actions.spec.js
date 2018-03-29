import ActionTypes from "../types"
import { updateFilmDetails, updateFilms, updateIsFetching } from "../"

const filmDetails = require("__test__/__fixture__/film-details.json")

test("updateFilmDetails(filmDetails) returns an action with list", () => {
  expect(updateFilmDetails(filmDetails)).toEqual({
    type: ActionTypes.UPDATE_FILM_DETAILS,
    data: { filmDetails }
  })
})

test("updateFilms(list) returns an action with list", () => {
  const films = ["foo", "bar"]
  expect(updateFilms({ films })).toEqual({
    type: ActionTypes.UPDATE_FILMS,
    data: { films }
  })
})

test("updateIsFetching(bool) returns an action with boolean value", () => {
  expect(updateIsFetching(true)).toEqual({
    type: ActionTypes.UPDATE_IS_FETCHING,
    data: { isFetching: true }
  })
})
