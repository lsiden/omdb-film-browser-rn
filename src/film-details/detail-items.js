export const detailExists = detail => detail && detail !== "N/A"

const imdbUrl = imdbID => `https://www.imdb.com/title/${imdbID}`

const detailItems = filmDetails => [
  { text: `Directed by ${filmDetails.Director}` },
  { text: `Written by ${filmDetails.Writer}` },
  { text: `Cast: ${filmDetails.Actors}` },
  { text: `Language: ${filmDetails.Language}` },
  { text: `Awards: ${filmDetails.Awards}` },
  { text: `Run Time: ${filmDetails.Runtime}` },
  { text: `IMDB Rating: ${filmDetails.imdbRating}/10` },
  { text: `Box Office: ${filmDetails.BoxOffice}` },
  {
    text: "Official Website",
    url: filmDetails.Website,
    cond: detailExists(filmDetails.Website)
  },
  {
    text: "IMDB page",
    url: filmDetails.imdbID ? imdbUrl(filmDetails.imdbID) : null
  },
  {
    text: `IMDB ID: ${filmDetails.imdbID}`
  }
]

export default detailItems
