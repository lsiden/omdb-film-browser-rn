export default function(film) {
  if (!film) {
    return "(title not available)"
  } else if (film.Title && film.Year) {
    return `${film.Title} (${film.Year})`
  } else {
    return film.Title
  }
}
