import getLastPagenum from "../get-last-pagenum"
import { RESULTS_PER_PAGE } from "constants"

it("returns 1 if there are less than RESULTS_PER_PAGE results", () => {
  var totalResults = RESULTS_PER_PAGE - 1
  expect(getLastPagenum(totalResults)).toBe(1)
})

it("returns 1 if there are exactly RESULTS_PER_PAGE results", () => {
  var totalResults = RESULTS_PER_PAGE
  expect(getLastPagenum(totalResults)).toBe(1)
})

it("returns 2 if there are RESULTS_PER_PAGE + 1 results", () => {
  var totalResults = RESULTS_PER_PAGE + 1
  expect(getLastPagenum(totalResults)).toBe(2)
})

it("returns 5 if there are 5 * RESULTS_PER_PAGE results", () => {
  var totalResults = 5 * RESULTS_PER_PAGE
  expect(getLastPagenum(totalResults)).toBe(5)
})
