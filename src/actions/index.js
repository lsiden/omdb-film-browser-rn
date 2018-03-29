import ActionTypes from "./types"

export const updateFilmDetails = filmDetails => ({
  type: ActionTypes.UPDATE_FILM_DETAILS,
  data: { filmDetails }
})

export const updateIsFetching = isFetching => ({
  type: ActionTypes.UPDATE_IS_FETCHING,
  data: { isFetching }
})

export const updateFilms = data => ({ type: ActionTypes.UPDATE_FILMS, data })
