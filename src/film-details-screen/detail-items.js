export const detailExists = detail => detail && detail !== "N/A"

const imdbUrl = imdbID => `https://www.imdb.com/title/${imdbID}`

const detailItems = filmDetails => {
  const ratings = filmDetails.Ratings || []
  const rottenRating = ratings.find(r => r.Source === "Rotten Tomatoes") || null
  return [
    { text: `Title: ${filmDetails.Title}` },
    { text: `Director: ${filmDetails.Director}` },
    { text: `Writer: ${filmDetails.Writer}` },
    { text: `Cast: ${filmDetails.Actors}` },
    { text: `Production: ${filmDetails.Production}` },
    { text: `Country: ${filmDetails.Country}` },
    { text: `Language: ${filmDetails.Language}` },
    { text: `Released: ${filmDetails.Released}` },
    { text: `DVD Released: ${filmDetails.DVD}` },
    { text: `Awards: ${filmDetails.Awards}` },
    { text: `Run Time: ${filmDetails.Runtime}` },
    { text: `IMDB Rating: ${filmDetails.imdbRating}/10` },
    {
      text: `Rotten Tomatoes Rating: ${(rottenRating || {}).Value}`,
      cond: rottenRating
    },
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
}

export default detailItems
