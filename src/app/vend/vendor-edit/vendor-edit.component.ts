import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-edit',
  templateUrl: './vendor-edit.component.html',
  styleUrls: ['./vendor-edit.component.css']
})
export class VendorEditComponent implements OnInit {

  vendor: Vendor = null;
  
  constructor(
    private sys: SystemService,
    private vnd: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.sys.debug("B4:", this.vendor);
    this.vnd.change(this.vendor).subscribe(
      res => { this.sys.debug(res); this.router.navigateByUrl("/vend/list"); },
      err => { this.sys.error(err); }
    );
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params.id;
    this.vnd.get(+id).subscribe(
      res => { this.sys.debug(res); this.vendor = res; },
      err => { this.sys.error(err); }
    );
  }

}
