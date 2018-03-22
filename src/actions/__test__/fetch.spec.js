import ActionTypes from "../types"
import { queryFetch, fetchFilmDetails } from "../fetch"

const filmDetails = require("__test__/__fixture__/film-details.json")

test("queryFetch()(dispatch) invokes dispatch() with ActionTypes.VIEW_FILM_LIST", () => {
  const dispatch = jest.fn()
  const response = {
    Search: ["Rocky Horror", "Halloween"],
  }
  response.json = () => Promise.resolve(response)
  fetch = jest.fn().mockImplementation(() => Promise.resolve(response))
  queryFetch("a query")(dispatch).then(() => {
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.UPDATE_FILMS,
      data: {
        films: response.Search,
      },
    })
  })
})

test("fetchFilmDetails()(dispatch) invokes dispatch() with ActionTypes.UPDATE_FILM_DETAILs", () => {
  const dispatch = jest.fn()
  const response = { filmDetails }
  response.json = () => Promise.resolve(response)
  fetch = jest.fn().mockImplementation(() => Promise.resolve(response))
  fetchFilmDetails("id")(dispatch).then(() => {
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.UPDATE_FILM_DETAILS,
      data: {
        filmDetails: response,
      },
    })
  })
})
