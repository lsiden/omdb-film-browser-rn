import { RESULTS_PER_PAGE } from "constants"

export default function(totalResults) {
  return Math.floor((totalResults - 1) / RESULTS_PER_PAGE) + 1
}
