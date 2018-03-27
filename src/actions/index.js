import ActionTypes from "./types"

export const viewFilmList = () => ({
  type: ActionTypes.VIEW_FILM_LIST,
  data: { screen: ActionTypes.VIEW_FILM_LIST }
})

export const viewFilmDetails = () => ({
  type: ActionTypes.VIEW_FILM_DETAILS,
  data: {
    screen: ActionTypes.VIEW_FILM_DETAILS
  }
})

export const viewAbout = () => ({
  type: ActionTypes.VIEW_ABOUT,
  data: {
    screen: ActionTypes.VIEW_ABOUT
  }
})

export const viewPoster = uri => ({
  type: ActionTypes.VIEW_POSTER,
  data: {
    screen: ActionTypes.VIEW_POSTER,
    poster: { uri }
  }
})

export const updateFilmDetails = filmDetails => ({
  type: ActionTypes.UPDATE_FILM_DETAILS,
  data: { filmDetails }
})

export const updateIsFetching = isFetching => ({
  type: ActionTypes.UPDATE_IS_FETCHING,
  data: { isFetching }
})

export const updateFilms = data => ({ type: ActionTypes.UPDATE_FILMS, data })
