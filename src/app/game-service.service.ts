import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from './domain/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private baseUrl = 'http://localhost:8080/manacala';
  
  response$: Observable<ApiResponse> | undefined;

  // Update with your backend URL

  constructor(private http: HttpClient) { }

  getBoard(): Observable<ApiResponse> {
   this.response$ = this.http.get<ApiResponse>(`${this.baseUrl}/board`);
    return this.response$;
  }

  makeMove(playerNumber: string, house: number): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${this.baseUrl}/move/${playerNumber}/${house}`, null);
  }
}
