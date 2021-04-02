import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor: Vendor = new Vendor();
  
  constructor(
    private sys: SystemService,
    private vnd: VendorService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.vendor);
    this.vnd.create(this.vendor).subscribe(
      res => { console.debug("Created successfully!"); this.router.navigateByUrl("/vend/list"); },
      err => { console.error(err); }
    );
  }

  ngOnInit(): void {
    this.sys.chkLogin();
  }

}
