import { OMDB_URL, OMDB_API_KEY } from "constants"
import { updateToast } from "./toast"

const OMDB_URL_PREFIX = `${OMDB_URL}?apikey=${OMDB_API_KEY}`

export const Actions = {
  VIEW_FILM_LIST: "view-film-list",
  VIEW_FILM_DETAIL: "view-film-detail",
  UPDATE_FILMS: "update-films",
  UPDATE_FILM_DETAILS: "update-film-details",
  UPDATE_TOAST: "update-toast",
}

export const viewList = () => ({
  type: Actions.VIEW_FILM_LIST,
  data: { view: Actions.VIEW_FILM_LIST },
})

export const viewFilmSummary = filmSummary => ({
  type: Actions.VIEW_FILM_DETAIL,
  data: {
    view: Actions.VIEW_FILM_DETAIL,
    filmSummary,
  },
})

export const updateFilmDetails = filmDetails => ({
  type: Actions.UPDATE_FILM_DETAILS,
  data: { filmDetails },
})

export const updateFilms = films => ({
  type: Actions.UPDATE_FILMS,
  data: { films },
})

export const queryFetch = query => dispatch =>
  fetch(`${OMDB_URL_PREFIX}&type=movie&s=${query}`)
    .then(res => res.json())
    .then(res => dispatch(updateFilms(res.Search)))
    .catch(e => {
      console.error(e)
      dispatch(updateToast(e, "error"))
    })

export const fetchFilmDetails = id => dispatch =>
  fetch(`${OMDB_URL_PREFIX}&i=${id}`)
    .then(res => res.json())
    .then(res => dispatch(updateFilmDetails(res)))
    .catch(e => {
      console.error(e)
      dispatch(updateToast(e, "error"))
    })
