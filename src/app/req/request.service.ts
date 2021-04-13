import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../misc/system.service';
import { Request } from './request.class';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  get baseurl() { return `${this.sys.baseurl}/requests`; }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { 
  }
  
  list(): Observable<Request[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>;
  }
  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>;
  }
  getReviewed(userId: number): Observable<Request[]> {
    return this.http.get(`${this.baseurl}/reviewed/${userId}`) as Observable<Request[]>;
  }
  create(request: Request): Observable<Request> {
    return this.http.post(`${this.baseurl}`, request) as Observable<Request>;
  }
  change(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/${request.id}`, request) as Observable<any>;
  }
  remove(request: Request): Observable<Request> {
    return this.http.delete(`${this.baseurl}/${request.id}`) as Observable<Request>;
  }
  setReview(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/review`, request) as Observable<any>;
  }
  setApproved(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/approve`, request) as Observable<any>;
  }
  setRejected(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/reject`, request) as Observable<any>;
  }
}
