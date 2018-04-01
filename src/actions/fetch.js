import { OMDB_API_URL, OMDB_API_KEY } from "constants"
import { updateToast } from "./toast"
import { getState } from "store"
import { viewFilmList, updateFilms, updateFilmDetails } from "./"
import getLastPagenum from "util/get-last-pagenum"
import ActionTypes from "./types"

const OMDB_URL_PREFIX = `${OMDB_API_URL}?apikey=${OMDB_API_KEY}`

const updateFetching = isFetching => ({
  type: ActionTypes.UPDATE_FETCHING,
  data: { isFetching }
})

const fetchQueryResults = (dispatch, query, pageNum) => {
  dispatch(updateFetching(true))
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
      dispatch(updateFetching(false))
    })
    .catch(e => {
      dispatch(updateFetching(false))
      dispatch(updateToast(e.toString(), "error"))
      console.error(e)
    })
}

export const fetchQuery = query => dispatch =>
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
