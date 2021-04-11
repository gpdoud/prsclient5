import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors: Vendor[] = [];
  searchCriteria: string = '';
  get isAdmin(){ return this.sys.isAdmin };
  
  constructor(
    private sys: SystemService,
    private usr: VendorService
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.usr.list().subscribe(
      res => { console.debug(res); this.vendors = res; },
      err => { console.error(err); }
    );
  }

}
