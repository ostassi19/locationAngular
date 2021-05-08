import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService{
  urlLogin = 'http://127.0.0.1:8000/api/login';
  constructor(private http: HttpClient) {
  }

  login(username: string, password: string): Observable<User>{
    console.log({ username, password });
    return this.http.post<any>(this.urlLogin, { username, password });
  }
  parseJwt() {
    try {
      let token = window.localStorage.getItem('token');
      let t = token ? token :'';
      var base64Url = t.split('.')[1];
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));

      return JSON.parse(jsonPayload);
    }catch (e) {
      console.log('Authentification');
      return null;
    }
  }

}
