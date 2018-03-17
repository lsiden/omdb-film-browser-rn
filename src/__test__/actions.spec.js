import {
  Actions,
  viewList,
  viewFilmSummary,
  updateFilms,
  updateFilmDetails,
  updateToast,
  queryFetch,
  fetchFilmDetails,
} from "../actions"

import filmDetails from "./__fixture__/film-detail.json"

test("viewList() returns an action", () => {
  expect(viewList()).toEqual({
    type: Actions.VIEW_FILM_LIST,
    data: { view: Actions.VIEW_FILM_LIST },
  })
})

test("viewFilmSummary(filmSummary) returns an action with filmSummary", () => {
  const filmSummary = { Title: "A Title" }
  expect(viewFilmSummary(filmSummary)).toEqual({
    type: Actions.VIEW_FILM_DETAIL,
    data: {
      view: Actions.VIEW_FILM_DETAIL,
      filmSummary,
    },
  })
})

test("updateFilmDetails(filmDetails) returns an action with list", () => {
  expect(updateFilmDetails(filmDetails)).toEqual({
    type: Actions.UPDATE_FILM_DETAILS,
    data: { filmDetails },
  })
})

test("updateFilms(list) returns an action with list", () => {
  const films = ["foo", "bar"]
  expect(updateFilms(films)).toEqual({
    type: Actions.UPDATE_FILMS,
    data: { films },
  })
})

test("updateToast(array) returns an action with array of messages", () => {
  const toast = [{ text: "Hooray!" }, { text: "Eek" }, { text: "Oh noe!" }]
  expect(updateToast(toast)).toEqual({
    type: Actions.UPDATE_TOAST,
    data: { toast },
  })
})

test("updateToast(obj) returns an action with a single object", () => {
  const toast = { text: "Hooray!" }
  expect(updateToast(toast)).toEqual({
    type: Actions.UPDATE_TOAST,
    data: { toast },
  })
})

test("queryFetch()(dispatch) invokes dispatch() with Actions.VIEW_FILM_LIST", () => {
  const dispatch = jest.fn()
  const response = {
    Search: ["Rocky Horror", "Halloween"],
  }
  response.json = () => Promise.resolve(response)
  fetch = jest.fn().mockImplementation(() => Promise.resolve(response))
  queryFetch("a query")(dispatch).then(() => {
    expect(dispatch).toHaveBeenCalledWith({
      type: Actions.UPDATE_FILMS,
      data: {
        films: response.Search,
      },
    })
  })
})

test("fetchFilmDetails()(dispatch) invokes dispatch() with Actions.UPDATE_FILM_DETAILs", () => {
  const dispatch = jest.fn()
  const response = { filmDetails }
  response.json = () => Promise.resolve(response)
  fetch = jest.fn().mockImplementation(() => Promise.resolve(response))
  fetchFilmDetails("id")(dispatch).then(() => {
    expect(dispatch).toHaveBeenCalledWith({
      type: Actions.UPDATE_FILM_DETAILS,
      data: {
        filmDetails: response,
      },
    })
  })
})
