import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:3000/api/users/login"
  constructor(private http: HttpClient) { }

  userLogin(credentials:{email:string ; password:string}): Observable<any> {
    return this.http.post(`${this.url}`, credentials) 

  }


}
