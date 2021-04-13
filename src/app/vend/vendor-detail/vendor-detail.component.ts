import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-detail',
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.css']
})
export class VendorDetailComponent implements OnInit {

  vendor: Vendor = null;
  verifyDelete: boolean = false;
  get isAdmin() { return this.sys.isAdmin; }
  
  constructor(
    private sys: SystemService,
    private vnd: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  edit(): void {
    this.router.navigateByUrl(`/vend/edit/${this.vendor.id}`);
  }

  verify(): void {
    this.verifyDelete = !this.verifyDelete;
  }

  delete(): void {
    this.sys.debug("B4:", this.vendor);
    this.vnd.remove(this.vendor).subscribe(
      res => { this.sys.debug("Delete Successful!"); this.router.navigateByUrl("/vend/list"); },
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
