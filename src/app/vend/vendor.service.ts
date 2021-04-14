import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemService } from '../misc/system.service';
import { PoView } from './poview.class';
import { Vendor } from './vendor.class';

@Injectable({
  providedIn: 'root'
})
export class VendorService {
  get baseurl() { return `${this.sys.baseurl}/vendors`; }

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { 
  }
  
  getPo(vendId: number): Observable<PoView> {
    return this.http.get(`${this.baseurl}/poview/${vendId}`) as Observable<PoView>;
  }
  login(vendorname: string, password: string): Observable<Vendor> {
    return this.http.get(`${this.baseurl}/${vendorname}/${password}`) as Observable<Vendor>;
  }
  list(): Observable<Vendor[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Vendor[]>;
  }
  get(id: number): Observable<Vendor> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Vendor>;
  }
  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(`${this.baseurl}`, vendor) as Observable<Vendor>;
  }
  change(vendor: Vendor): Observable<any> {
    return this.http.post(`${this.baseurl}/update/${vendor.id}`, vendor) as Observable<any>;
  }
  remove(vendor: Vendor): Observable<Vendor> {
    return this.http.post(`${this.baseurl}/delete/${vendor.id}`, null) as Observable<Vendor>;
  }
}
