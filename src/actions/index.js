import { OMDB_URL, OMDB_API_KEY } from "constants"
import { updateToast } from "./toast"

import { getState } from "store"
import ActionTypes from "./types"

const OMDB_URL_PREFIX = `${OMDB_URL}?apikey=${OMDB_API_KEY}`

export const viewList = () => ({
  type: ActionTypes.VIEW_FILM_LIST,
  data: { view: ActionTypes.VIEW_FILM_LIST },
})

export const viewFilmSummary = filmSummary => ({
  type: ActionTypes.VIEW_FILM_DETAIL,
  data: {
    view: ActionTypes.VIEW_FILM_DETAIL,
    filmSummary,
  },
})

export const updateFilmDetails = filmDetails => ({
  type: ActionTypes.UPDATE_FILM_DETAILS,
  data: { filmDetails },
})

export const updateFilms = data => ({ type: ActionTypes.UPDATE_FILMS, data })

const fetchResults = (dispatch, query, pageNum) =>
  fetch(`${OMDB_URL_PREFIX}&type=movie&s=${query}&page=${pageNum}`)
    .then(res => res.json())
    .then(res =>
      dispatch(
        updateFilms({
          query,
          pageNum,
          films: res.Search,
          totalResults: Number(res.totalResults),
        })
      )
    )
    .catch(e => {
      console.error(e)
      dispatch(updateToast(e, "error"))
    })

export const queryFetch = query => dispatch => fetchResults(dispatch, query, 1)

export const fetchPage = pageNum => dispatch => {
  const { query, totalResults = 0 } = getState()
  const lastPage = Math.floor(totalResults / 10) + 1
  console.log("pageNum", pageNum, "lastPage", lastPage)

  if (0 < pageNum && pageNum <= lastPage) {
    console.log("fetching")
    fetchResults(dispatch, query, pageNum)
  }
}

export const fetchFilmDetails = id => dispatch =>
  fetch(`${OMDB_URL_PREFIX}&i=${id}`)
    .then(res => res.json())
    .then(res => dispatch(updateFilmDetails(res)))
    .catch(e => {
      console.error(e)
      dispatch(updateToast(e, "error"))
    })
