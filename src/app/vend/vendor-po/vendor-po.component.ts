import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { User } from 'src/app/user/user.class';
import { PoView } from '../poview.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-po',
  templateUrl: './vendor-po.component.html',
  styleUrls: ['./vendor-po.component.css']
})
export class VendorPoComponent implements OnInit {

  poview: PoView = null;
  user: User = null;
  searchCriteria: string = '';
  get isAdmin() { return this.sys.isAdmin; }

  constructor(
    private sys: SystemService,
    private vnd: VendorService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.user = this.sys.loggedInUser;
    this.vnd.getPo(1).subscribe(
      res => {
        console.debug(res);
        this.poview = res;
      },
      err => {
        console.error(err);
      }
    );
  }

}
