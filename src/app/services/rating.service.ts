import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {CommentaireModels} from "../models/commentaire.model";
import {RatingModels} from "../models/rating.model";

@Injectable({
  providedIn: 'root'
})
export class RatingService{
  c= localStorage.getItem("token");
  urlRatings='http://127.0.0.1:8000/api/ratings'

  constructor(private http: HttpClient) {
  }
  getRatings():Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.c}`
    })
    return this.http.get(this.urlRatings,{ headers: headers })
  }

  createRate(data: any): Observable<RatingModels>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.c}`
    })
    return this.http.post<RatingModels>(this.urlRatings,data,{ headers: headers })
  }
  getRatingByIdMaison(idMaison: any):Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.c}`
    })
    return this.http.get(this.urlRatings+'/'+idMaison+'/maison',{ headers: headers })
  }
}
