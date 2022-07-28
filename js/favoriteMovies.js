export  class favorite {
  constructor(router) {
    this.router = document.querySelector(router);
    this.add()
  }

  add() {
    const dataBase = [
      {
        Title: "titanic",
        Year: "1980",
        Runtime: "115min",
        Poster: "https://m.media-amazon.com/images/M/MV5BNTQyZGI0NDgtYTM0ZC00NTdkLTk2OTItYTgwYmYwNjZlNDRlXkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg"
      }
    ]

    this.dataBase = dataBase
  }
}

export class favoritesView extends favorite {
  constructor(router) {
    super(router);
    this.tbody = this.router.querySelector("table tbody")
    this.update();
  }

  update() {
    this.removeAllTr()

    this.dataBase.forEach(movie => {
      const tr = this.createTr()

      tr.querySelector(".MovieName img").src = movie.Poster
      tr.querySelector(".MovieName a").href = `https://www.adorocinema.com/pesquisar/?q=${movie.Title}`
     tr.querySelector(".MovieName p").textContent = movie.Title


      this.tbody.append(tr)
    })
  }

  createTr() {
    const tr = document.createElement("tr")

    tr.innerHTML = `
        <td class="MovieName">
        <img src="https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg%22" alt="poster do titanic">
        <a href="">
          <p>Titanic</p>
        </a>
      </td>
      <td class="year">1987</td>
      <td class="Runtime">198min</td>
      <td class="remove">
        <button>X</button>
      </td>
    `

    return tr
  }

  removeAllTr(){
   this.tbody.querySelectorAll("tr").forEach(tr => {
    tr.remove()
   });
  }
}

