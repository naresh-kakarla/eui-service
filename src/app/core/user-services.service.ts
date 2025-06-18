import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

 
  loginUrl = "http://localhost:3000/api/users/login"
  registerUrl="http://localhost:3000/api/users/register"
    constructor(private http: HttpClient) { }
  
    userLogin(credentials:{email:string ; password:string}): Observable<any> {
      return this.http.post(`${this.loginUrl}`, credentials) 
  
    }
     register(userData:any):Observable<any>{
    return this.http.post(`${this.registerUrl}`,userData)
  }
}
