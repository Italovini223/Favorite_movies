export class getMovie {
  static search(movieTitle){
    const endpoint = `https://www.omdbapi.com/?t=${movieTitle}&apikey=29098c83&`

    return fetch(endpoint)
    .then(data => data.json())
    .then(({Title, Year, Runtime, Poster}) => ({
      Title,
      Year,
      Runtime,
      Poster
    }))
  }
}