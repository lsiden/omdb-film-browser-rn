import ActionTypes from "../types"
import { fetchNewQuery, fetchFilmDetails } from "../fetch"

// Silence the log messages during tests.
// eslint-disable-next-line no-console
console.log = () => {}

jest.mock("redux")
jest.mock("store", () => ({
  getState: () => "getState"
}))

jest.mock("event-target-shim", () => ({
  EventTarget: () => "EventTarget",
  defineEventAttribute: () => "defineEventAttribute"
}))

jest.mock(
  "abort-controller",
  () =>
    class AbortController {
      abort() {}
    }
)
const filmDetails = require("__fixture__/film-details.json")

test("fetchNewQuery()(dispatch) invokes dispatch() with ActionTypes.UPDATE_FILMS", () => {
  const dispatch = jest.fn()

  const response = {
    Search: ["Rocky Horror", "Halloween"],
    pageNum: 1,
    numPages: 99,
    json: () => Promise.resolve(response)
  }
  fetch = jest.fn().mockImplementation(() => Promise.resolve(response))
  fetchNewQuery("a query")(dispatch).then(() => {
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
  const response = {
    filmDetails,
    json: () => Promise.resolve(response)
  }
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
