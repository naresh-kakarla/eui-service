import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  url='http://localhost:3000/api/users/register'

  constructor(private http:HttpClient) { }

  register(userData:any):Observable<any>{
    return this.http.post(`${this.url}`,userData)
  }
}
