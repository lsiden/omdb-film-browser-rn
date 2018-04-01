import { ToastStyles } from "react-native-toaster"

import { OMDB_API_URL, OMDB_API_KEY } from "constants"
import { updateToast } from "./toast"
import { getState } from "store"
import { updateFilms, updateFilmDetails, updateLastPageNumFetched } from "./"
import getLastPagenum from "util/get-last-pagenum"
import ActionTypes from "./types"

const OMDB_URL_PREFIX = `${OMDB_API_URL}?apikey=${OMDB_API_KEY}`

const updateIsFetching = isFetching => ({
  type: ActionTypes.UPDATE_FETCHING,
  data: { isFetching }
})

const fetchQueryResults = (dispatch, query, pageNum) => {
  console.log(`fetchQueryResults("${query}", ${pageNum})`)
  dispatch(updateLastPageNumFetched(pageNum))
  dispatch(updateIsFetching(true))
  return fetch(`${OMDB_URL_PREFIX}&type=movie&s=${query}&page=${pageNum}`)
    .then(res => {
      try {
        return res.json()
      } catch (e) {
        dispatch(updateToast(e.toString(), ToastStyles.warning))
        return Promise.reject(e)
      }
    })
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
      console.log("got results")
      dispatch(updateIsFetching(false))
    })
    .catch(e => {
      dispatch(updateIsFetching(false))
      console.error(e)
    })
}

export const fetchNewQuery = query => dispatch => {
  console.log("fetchNewQuery()")
  return fetchQueryResults(dispatch, query, 1)
}

export const fetchQueryResultPage = () => dispatch => {
  console.log("fetchQueryResultPage()")
  const { query, lastPageNumFetched, lastPage } = getState()

  if (0 < lastPageNumFetched && lastPageNumFetched <= lastPage) {
    return fetchQueryResults(dispatch, query, lastPageNumFetched + 1)
  } else {
    return Promise.resolve()
  }
}

export const fetchFilmDetails = id => dispatch => {
  dispatch(updateFilmDetails(null))
  return fetch(`${OMDB_URL_PREFIX}&i=${id}`)
    .then(res => {
      try {
        return res.json()
      } catch (e) {
        dispatch(updateToast(e.toString(), ToastStyles.warning))
        return Promise.reject(e)
      }
    })
    .then(res => {
      dispatch(updateFilmDetails(res))
    })
    .catch(e => {
      console.error(e)
      dispatch(updateToast(e.toString(), ToastStyles.error))
    })
}
