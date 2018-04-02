import ActionTypes from "./types"

export const updateFilms = data => ({ type: ActionTypes.UPDATE_FILMS, data })

export const appendFilms = films => ({
  type: ActionTypes.APPEND_FILMS,
  data: { films }
})

export const updateLastPageNumFetched = lastPageNumFetched => ({
  type: ActionTypes.UPDATE_LAST_PAGENUM_FETCHED,
  data: { lastPageNumFetched }
})

export const updateFilmDetails = filmDetails => ({
  type: ActionTypes.UPDATE_FILM_DETAILS,
  data: { filmDetails }
})
