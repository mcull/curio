import { CurioUser } from '../models/user';

export const addUser = (userEmail: any): CurioUser => {
    let user = new CurioUser();
    if (userEmail) {
      (async () => {
        const rawResponse = await fetch(`/api/users/${userEmail}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-gastby-key': (Date.now() + 10000).toString() // key expires in 10 sec 
          },
          body: JSON.stringify({userEmail: userEmail})
        });
        user = await rawResponse.json();
      })();
    }
    return user;
  }
  
export const addUserVisit = (userId: string) => {
    if (userId) {
      (async () => {
        const rawResponse = await fetch(`/api/userVisits/${userId}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-gastby-key': (Date.now() + 10000).toString() // key expires in 10 sec 
          },
          body: JSON.stringify({userId: userId})
        });
        const content = await rawResponse.json();
      })();
    }
  }