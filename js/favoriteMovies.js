export  class favorite {
  constructor(router) {
    this.router = document.querySelector(router);
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
  }

  removeAllTr(){
   this.tbody.querySelectorAll("tr").forEach(tr => {
    tr.remove()
   });
  }
}

