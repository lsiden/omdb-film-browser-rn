import { OMDB_API_URL, OMDB_API_KEY } from "constants"
import { updateToast } from "./toast"
import { getState } from "store"
import { viewFilmList, updateFilms, updateFilmDetails } from "./"
import getLastPagenum from "util/get-last-pagenum"

const OMDB_URL_PREFIX = `${OMDB_API_URL}?apikey=${OMDB_API_KEY}`

const fetchQueryResults = (dispatch, query, pageNum) => {
  return fetch(`${OMDB_URL_PREFIX}&type=movie&s=${query}&page=${pageNum}`)
    .then(res => res.json())
    .then(res => {
      const totalResults = Number(res.totalResults)
      dispatch(
        updateFilms({
          query,
          pageNum,
          totalResults,
          lastPage: getLastPagenum(totalResults),
          films: res.Search
        })
      )
    })
    .catch(e => {
      console.error(e)
      dispatch(updateToast(e.toString(), "error"))
    })
}

export const queryFetch = query => dispatch =>
  fetchQueryResults(dispatch, query, 1)

export const fetchPage = pageNum => dispatch => {
  const { query, lastPage } = getState()

  if (0 < pageNum && pageNum <= lastPage) {
    fetchQueryResults(dispatch, query, pageNum)
  }
}

export const fetchFilmDetails = id => dispatch => {
  dispatch(updateFilmDetails(null))
  return fetch(`${OMDB_URL_PREFIX}&i=${id}`)
    .then(res => res.json())
    .then(res => {
      dispatch(updateFilmDetails(res))
    })
    .catch(e => {
      console.error(e)
      dispatch(updateToast(e.toString(), "error"))
      dispatch(viewFilmList())
    })
}
