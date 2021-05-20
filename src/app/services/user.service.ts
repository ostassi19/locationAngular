import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentaireModels} from "../models/commentaire.model";
import {RatingModels} from "../models/rating.model";

@Injectable({
  providedIn: 'root'
})
export class UserService{
  c= localStorage.getItem("token");
  urlUsers='http://127.0.0.1:8000/api/users/'

  constructor(private http: HttpClient) {
  }
  getUser(username : string):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.c}`
    })
    //  /api/users/{username}/username
    return this.http.get(this.urlUsers+'_username',{ headers: headers })
  }
}
