import getLastPagenum from "../get-last-pagenum"
import { OMDB_RESULTS_PER_PAGE } from "constants"

it("returns 1 if there are less than OMDB_RESULTS_PER_PAGE results", () => {
  var totalResults = OMDB_RESULTS_PER_PAGE - 1
  expect(getLastPagenum(totalResults)).toBe(1)
})

it("returns 1 if there are exactly OMDB_RESULTS_PER_PAGE results", () => {
  var totalResults = OMDB_RESULTS_PER_PAGE
  expect(getLastPagenum(totalResults)).toBe(1)
})

it("returns 2 if there are OMDB_RESULTS_PER_PAGE + 1 results", () => {
  var totalResults = OMDB_RESULTS_PER_PAGE + 1
  expect(getLastPagenum(totalResults)).toBe(2)
})

it("returns 5 if there are 5 * OMDB_RESULTS_PER_PAGE results", () => {
  var totalResults = 5 * OMDB_RESULTS_PER_PAGE
  expect(getLastPagenum(totalResults)).toBe(5)
})
