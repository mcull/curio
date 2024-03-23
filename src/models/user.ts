export interface ICurioUser {
    id: string
    email: string
    visits: string[]
}

export class CurioUser implements ICurioUser{
    id: string
    email: string
    visits: string[]
  
    constructor() {
      this.id = "";
      this.email = "";
      this.visits = [];
    }
}