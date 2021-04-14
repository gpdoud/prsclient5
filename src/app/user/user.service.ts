import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../misc/system.service';
import { User } from './user.class';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  get baseurl() { return `${this.sys.baseurl}/users`; }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { 
  }
  
  login(username: string, password: string): Observable<User> {
    return this.http.get(`${this.baseurl}/${username}/${password}`) as Observable<User>;
  }
  list(): Observable<User[]> {
    return this.http.get(`${this.baseurl}`) as Observable<User[]>;
  }
  get(id: number): Observable<User> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  }
  create(user: User): Observable<User> {
    return this.http.post(`${this.baseurl}`, user) as Observable<User>;
  }
  change(user: User): Observable<any> {
    return this.http.post(`${this.baseurl}/update/${user.id}`, user) as Observable<any>;
  }
  remove(user: User): Observable<User> {
    return this.http.post(`${this.baseurl}/delete/${user.id}`, null) as Observable<User>;
  }
}
