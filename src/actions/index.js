import ActionTypes from "./types"

export const updateFilmDetails = filmDetails => ({
  type: ActionTypes.UPDATE_FILM_DETAILS,
  data: { filmDetails }
})

export const updateFilms = data => ({ type: ActionTypes.UPDATE_FILMS, data })
