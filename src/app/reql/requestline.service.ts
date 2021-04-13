import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../misc/system.service';
import { Requestline } from './requestline.class';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  get baseurl() { return `${this.sys.baseurl}/requestlines`; }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { 
  }
  
  list(): Observable<Requestline[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Requestline[]>;
  }
  get(id: number): Observable<Requestline> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Requestline>;
  }
  create(requestline: Requestline): Observable<Requestline> {
    return this.http.post(`${this.baseurl}`, requestline) as Observable<Requestline>;
  }
  change(requestline: Requestline): Observable<any> {
    return this.http.put(`${this.baseurl}/${requestline.id}`, requestline) as Observable<any>;
  }
  remove(requestline: Requestline): Observable<Requestline> {
    return this.http.delete(`${this.baseurl}/${requestline.id}`) as Observable<Requestline>;
  }
}
