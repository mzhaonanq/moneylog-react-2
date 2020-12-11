let id =JSON.parse(window.localStorage.getItem('idMax')||'0' )
class Id {
  idValue: number;
  constructor() {
    id += 1;
    this.idValue = id
    window.localStorage.setItem('idMax',JSON.stringify(this.idValue))
  }
}

export {Id}