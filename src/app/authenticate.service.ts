import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login/login';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  private url = 'http://127.0.0.1:8080';
  private api = '/auth';

  constructor( private http: HttpClient ) { 

  }

  authenticate(creds: Login): Observable<User> {
    return this.http.post<User>(this.url + this.api, creds)
  }
}
