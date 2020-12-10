let id = 0
class Id {
  idValue: number;
  constructor() {
    id += 1;
    this.idValue = id
  }
}

export {Id}