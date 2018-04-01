import ActionTypes from "../types"
import { fetchQuery, fetchFilmDetails } from "../fetch"

const filmDetails = require("__test__/__fixture__/film-details.json")

test("fetchQuery()(dispatch) invokes dispatch() with ActionTypes.UPDATE_FILMS", () => {
  const dispatch = jest.fn()
  const response = {
    Search: ["Rocky Horror", "Halloween"],
    pageNum: 1,
    numPages: 99
  }
  response.json = () => Promise.resolve(response)
  fetch = jest.fn().mockImplementation(() => Promise.resolve(response))
  fetchQuery("a query")(dispatch).then(() => {
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionTypes.UPDATE_FILMS,
      data: {
        films: response.Search,
        pageNum: 1,
        numPages: 99
      }
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
        filmDetails: response
      }
    })
  })
})
