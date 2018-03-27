import { OMDB_RESULTS_PER_PAGE } from "constants"

export default function(totalResults) {
  return Math.floor((totalResults - 1) / OMDB_RESULTS_PER_PAGE) + 1
}
