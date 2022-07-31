export class getMovie {
  static search(movieTitle){
    const endpoint = `http://www.omdbapi.com/?t=${movieTitle}`

    return fetch(endpoint)
    .then(data => data.json())
    .then({Title, Year, Runtime, Poster} => {
      Title,
      Year,
      Runtime,
      Poster
    })
  }
}