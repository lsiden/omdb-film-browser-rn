import ActionTypes from "../types"
import {
  viewList,
  viewFilmDetails,
  viewPoster,
  updateFilms,
  updateFilmDetails,
  updateIsFetching,
} from "../"

const filmDetails = require("__test__/__fixture__/film-details.json")

test("viewList() returns an action", () => {
  expect(viewList()).toEqual({
    type: ActionTypes.VIEW_FILM_LIST,
    data: { screen: ActionTypes.VIEW_FILM_LIST },
  })
})

test("viewFilmDetails(filmSummary) returns an action with filmSummary", () => {
  const filmSummary = { Title: "A Title" }
  expect(viewFilmDetails(filmSummary)).toEqual({
    type: ActionTypes.VIEW_FILM_DETAILS,
    data: {
      screen: ActionTypes.VIEW_FILM_DETAILS,
    },
  })
})

test("viewPoster(uri) returns an action with a uri", () => {
  const uri = "http://my.poster.url"
  expect(viewPoster(uri)).toEqual({
    type: ActionTypes.VIEW_POSTER,
    data: {
      screen: ActionTypes.VIEW_POSTER,
      poster: { uri },
    },
  })
})

test("updateFilmDetails(filmDetails) returns an action with list", () => {
  expect(updateFilmDetails(filmDetails)).toEqual({
    type: ActionTypes.UPDATE_FILM_DETAILS,
    data: { filmDetails },
  })
})

test("updateFilms(list) returns an action with list", () => {
  const films = ["foo", "bar"]
  expect(updateFilms({ films })).toEqual({
    type: ActionTypes.UPDATE_FILMS,
    data: { films },
  })
})

test("updateIsFetching(bool) returns an action with boolean value", () => {
  expect(updateIsFetching(true)).toEqual({
    type: ActionTypes.UPDATE_IS_FETCHING,
    data: { isFetching: true },
  })
})
