import { getMovie } from "./getMovie.js";
export  class favorite {
  constructor(router) {
    this.router = document.querySelector(router);
    this.load()
  }

  save() {
    localStorage.setItem("@movies-favorites", JSON.stringify(this.dataBase))
  }

  async add(movieName) {
    try {
      const movieExist = this.dataBase.find(entry => entry.name === movieName)

      if(movieExist) {
        throw new Error("Movie already exists")
      }

      const movie = await getMovie.search(movieName);

      

      if(movie.Title === undefined) {
        throw new Error("this movie does not exist")
      }

      this.dataBase = [movie,...this.dataBase]
      this.update()
      this.save()

    } catch(error) {
      alert(error.message)
    }
    
  }   

  load() {
   this.dataBase= JSON.parse(localStorage.getItem("@movies-favorites")) || []
  }

  delete(movie) {
    const filteredDatabase = this.dataBase.filter(entry => entry.Title !== movie)

    this.dataBase = filteredDatabase;

    this.update()
  }
}

export class favoritesView extends favorite {
  constructor(router) {
    super(router);
    this.tbody = this.router.querySelector("table tbody")
    this.update();
    this.forAdd()
  }

  forAdd() {
    const addButton = this.router.querySelector(".search button");

    addButton.onclick = () => {
    const {value} = this.router.querySelector(".search input");
    this.add(value)
    }
  }

  update() {
    this.removeAllTr()
    

    this.dataBase.forEach(movie => {
      const tr = this.createTr()

      tr.querySelector(".MovieName img").src = movie.Poster
      tr.querySelector(".MovieName a").href = `https://www.adorocinema.com/pesquisar/?q=${movie.Title}`
      tr.querySelector(".MovieName p").textContent = movie.Title
      tr.querySelector(".year").textContent = movie.Year
      tr.querySelector(".Runtime").textContent = movie.Runtime

      tr.querySelector(".remove").onclick = () => {
        const remove = confirm("Deseja apagar este filme ?")

        if(remove) {
          this.delete(movie.Title)
        }
      }


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
      <td class="year"></td>
      <td class="Runtime"></td>
      <td>
        <button class="remove">X</button>
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

