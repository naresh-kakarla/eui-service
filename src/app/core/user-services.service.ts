import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  private client_id = '43300356-8071-4133-9af4-a7243ce924cc'
  private client_secret = 'dmYGUY4D-XuWYmEMSP0u9l1V6SPTZGJiCDd2OGyUCLiH-zWRe8sclq_ZsGnh_nmClJ8RH8N1ea_NQJclV6AJPS9VK7o9lX938y-6uEuDywMEOlW0vYJGItfT60txSiGg3K52vqk4sPqoqXSl6gY4qqILm4-Y1vrtMDSnpi4bSTE'

  
  private loginUrl = "http://54.164.160.232/auth/jwt/token/"
  private registerUrl = "http://54.164.160.232/api/v1/user/"
  constructor(private http: HttpClient) { }


  userLogin(credentials: { username: string; password: string }): Observable<any> {
    const body = {
      client_id: this.client_id,
      client_secret: this.client_secret,
      grant_type: 'password',
      username: credentials.username,
      password: credentials.password
    };
    return this.http.post(`${this.loginUrl}`, body)

  }

  register(userData: any): Observable<any> {
    return this.http.post(`${this.registerUrl}`, userData)
  }

  
}
