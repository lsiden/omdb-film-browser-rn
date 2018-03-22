import ActionTypes from "./types"

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

export const updateIsFetching = isFetching => ({
  type: ActionTypes.UPDATE_IS_FETCHING,
  data: { isFetching },
})

export const updateFilms = data => ({ type: ActionTypes.UPDATE_FILMS, data })
