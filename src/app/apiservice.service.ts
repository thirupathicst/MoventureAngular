import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {

  private apiBaseUrl:string="https://localhost:5001/api";

  constructor(private http: HttpClient) { }

  public createActor(Actor: Object): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/Actor`, Actor);
  }

  public getGenres(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/Genres`);
  }

  public createGenres(Genres: Object): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/Genres`, Genres);
  }

  public updateGenres(Genres: Object): Observable<any> {
    return this.http.post(`${this.apiBaseUrl}/Genres`, Genres);
  }

  public getCountries(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/Countries`);
  }

  public getStates(): Observable<any> {
    return this.http.get(`${this.apiBaseUrl}/States`);
  }
}
