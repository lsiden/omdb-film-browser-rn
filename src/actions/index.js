import ActionTypes from "./types"

export const viewList = () => ({
  type: ActionTypes.VIEW_FILM_LIST,
  data: { view: ActionTypes.VIEW_FILM_LIST },
})

export const viewFilmDetails = () => ({
  type: ActionTypes.VIEW_FILM_DETAILS,
  data: {
    view: ActionTypes.VIEW_FILM_DETAILS,
  },
})

export const viewPoster = uri => ({
  type: ActionTypes.VIEW_POSTER,
  data: {
    view: ActionTypes.VIEW_POSTER,
    poster: { uri },
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
