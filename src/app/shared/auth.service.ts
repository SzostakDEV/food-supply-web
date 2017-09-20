import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AuthService {
  constructor(private http: Http) { }

  login(login, password): Promise<any> {
    return this.http.get(`http://localhost:6161/user/auth/${login}/${password}`)
      .toPromise()
      .then((response: any) => {
       const data = response.json();
       localStorage.setItem('sid', data.sid);

       return data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  logout(): void {
    localStorage.setItem('sid', '');
  }
}
