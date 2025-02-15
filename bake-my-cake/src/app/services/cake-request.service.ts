import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CakeRequest } from '../model/cake-request';
@Injectable({
  providedIn: 'root',
})
export class CakeRequestService {
  URL: string = "http://localhost:3000/CakeRequests";
  constructor(private http: HttpClient) {}

  getAllCakeReqeusts(): Observable<Array<CakeRequest>> {
    return this.http.get<Array<CakeRequest>>(`${this.URL}`);
  }

  saveCakeRequest(cakeRequest?: CakeRequest): Observable<CakeRequest> {
    //return this.http.post<CakeRequest>(`${this.URL}`, cakeRequest);
    return this.http.post<CakeRequest>(this.URL, cakeRequest)
  }
}