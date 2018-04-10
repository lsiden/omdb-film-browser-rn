/* eslint-disable no-console */

import AbortController from "abort-controller"
import { ToastStyles } from "react-native-toaster"

import { FETCH_TIMEOUT, OMDB_API_URL, OMDB_API_KEY } from "constants"
import { updateToast } from "./toast"
import { getState } from "store"
import {
  updateFilms,
  appendFilms,
  updateFilmDetails,
  updateLastPageNumFetched
} from "./"
import getLastPagenum from "util/get-last-pagenum"
import ActionTypes from "./types"

const OMDB_URL_PREFIX = `${OMDB_API_URL}?apikey=${OMDB_API_KEY}`
const abortController = new AbortController()

const updateIsFetching = (isFetching = false) => ({
  type: ActionTypes.UPDATE_FETCHING,
  data: { isFetching }
})

const onFetchTimeout = (dispatch, msg) => {
  console.log("timeout, aborting.")
  abortController.abort() // abort previous query if not yet resolved
  dispatch(updateIsFetching(false))
  dispatch(updateToast(msg, ToastStyles.warning))
}

const unPackResponse = res => {
  try {
    return res.json()
  } catch (e) {
    return Promise.reject(e)
  }
}

const fetchQueryResults = (dispatch, query, pageNum) => {
  console.log(`fetchQueryResults("${query}", ${pageNum})`)

  abortController.abort() // abort previous query if not yet resolved
  dispatch(updateLastPageNumFetched(pageNum))
  dispatch(updateIsFetching(true))

  const timeout = setTimeout(
    () => onFetchTimeout(dispatch, "Unable to fetch data. Try again."),
    FETCH_TIMEOUT
  )

  return fetch(`${OMDB_URL_PREFIX}&type=movie&s=${query}&page=${pageNum}`, {
    signal: abortController.signal
  })
    .then(res => {
      clearTimeout(timeout)
      return unPackResponse(res)
    })
    .then(res => {
      const totalResults = Number(res.totalResults)
      if (pageNum === 1) {
        dispatch(
          updateFilms({
            query,
            pageNum,
            totalResults,
            lastPage: getLastPagenum(totalResults),
            films: res.Search
          })
        )
      } else {
        dispatch(appendFilms(res.Search))
      }
      dispatch(updateIsFetching(false))
      console.log(`found ${totalResults} results`)
    })
    .catch(e => {
      dispatch(updateIsFetching(false))
      dispatch(updateToast(e.toString(), ToastStyles.warning))
      console.warn(e.toString())
    })
}

export const fetchNewQuery = query => dispatch => {
  dispatch(
    updateFilms({
      query,
      pageNum: 0,
      totalResults: 0,
      lastPage: 0,
      films: []
    })
  )
  return fetchQueryResults(dispatch, query, 1)
}

export const fetchQueryResultPage = () => dispatch => {
  const { query, lastPageNumFetched, lastPage } = getState()

  if (0 < lastPageNumFetched && lastPageNumFetched <= lastPage) {
    return fetchQueryResults(dispatch, query, lastPageNumFetched + 1)
  } else {
    return Promise.resolve()
  }
}

export const fetchFilmDetails = id => dispatch => {
  dispatch(updateFilmDetails(null))

  const timeout = setTimeout(
    () =>
      onFetchTimeout(
        dispatch,
        "Details for this film are not available.  Try another, or try again later."
      ),
    FETCH_TIMEOUT
  )

  return fetch(`${OMDB_URL_PREFIX}&i=${id}`)
    .then(res => {
      clearTimeout(timeout)
      return unPackResponse(res)
    })
    .then(res => {
      dispatch(updateFilmDetails(res))
    })
    .catch(e => {
      dispatch(updateToast(e.toString(), ToastStyles.warning))
      console.warn(e.toString())
    })
}
