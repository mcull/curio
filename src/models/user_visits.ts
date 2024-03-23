export interface ICurioUserVisit {
    id: string
    user_id: string
    visit_date: string
}

export class CurioUserVisit implements ICurioUserVisit{
    id: string
    user_id: string
    visit_date: string
  
    constructor() {
      this.id = "";
      this.user_id = "";
      this.visit_date = "";
    }
}