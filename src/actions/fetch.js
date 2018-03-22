import { OMDB_URL, OMDB_API_KEY } from "constants"
import { updateToast } from "./toast"
import { getState } from "store"
import { updateFilms, updateFilmDetails, updateIsFetching } from "./"
import { RESULTS_PER_PAGE } from "constants"

const OMDB_URL_PREFIX = `${OMDB_URL}?apikey=${OMDB_API_KEY}`

const fetchResults = (dispatch, query, pageNum) =>
  fetch(`${OMDB_URL_PREFIX}&type=movie&s=${query}&page=${pageNum}`)
    .then(res => res.json())
    .then(res => {
      dispatch(
        updateFilms({
          query,
          pageNum,
          films: res.Search,
          totalResults: Number(res.totalResults),
        })
      )
      dispatch(updateIsFetching(false))
    })
    .catch(e => {
      console.error(e)
      dispatch(updateToast(e, "error"))
      dispatch(updateIsFetching(false))
    })

export const queryFetch = query => dispatch => fetchResults(dispatch, query, 1)

export const fetchPage = pageNum => dispatch => {
  const { query, totalResults = 0 } = getState()
  const lastPage = Math.floor(totalResults / RESULTS_PER_PAGE) + 1

  if (0 < pageNum && pageNum <= lastPage) {
    fetchResults(dispatch, query, pageNum)
  }
}

export const fetchFilmDetails = id => dispatch =>
  fetch(`${OMDB_URL_PREFIX}&i=${id}`)
    .then(res => res.json())
    .then(res => {
      dispatch(updateFilmDetails(res))
      dispatch(updateIsFetching(false))
    })
    .catch(e => {
      console.error(e)
      dispatch(updateToast(e, "error"))
      dispatch(updateIsFetching(false))
    })
