import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class MaisonService{
  c= localStorage.getItem("token");
  urlMaison = 'http://127.0.0.1:8000/api/maisons';
  constructor(private http: HttpClient) {
  }
  getMaisons(): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.c}`
    })
    return this.http.get<any>(this.urlMaison,{ headers: headers });
  }
}
