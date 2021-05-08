import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentaireModels} from "../models/commentaire.model";


@Injectable({
  providedIn: 'root'
})
export class CommentaireService{
  c= localStorage.getItem("token");
  urlCommentaires = 'http://127.0.0.1:8000/api/commentaires';
  urlcreate='http://127.0.0.1:8000/api/commentaires'
  constructor(private http: HttpClient) {
  }
  getCommentaire(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.c}`
    })
    return this.http.get<any>(this.urlCommentaires,{ headers: headers });
  }
  createCommentaire(data: any):Observable<CommentaireModels>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.c}`
    })
    return this.http.post<CommentaireModels>(this.urlcreate,data,{ headers: headers });
  }
}
