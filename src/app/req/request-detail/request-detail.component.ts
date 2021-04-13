import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-detail',
  templateUrl: './request-detail.component.html',
  styleUrls: ['./request-detail.component.css']
})
export class RequestDetailComponent implements OnInit {

  request: Request = null;
  verifyDelete: boolean = false;

  constructor(
    private sys: SystemService,
    private req: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  edit(): void {
    this.router.navigateByUrl(`/req/edit/${this.request.id}`);
  }

  verify(): void {
    this.verifyDelete = !this.verifyDelete;
  }

  delete(): void {
    console.debug("B4:", this.request);
    this.req.remove(this.request).subscribe(
      res => { this.sys.debug("Delete Successful!"); this.router.navigateByUrl("/req/list"); },
      err => { this.sys.error(err); }
    );
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params.id;
    this.req.get(+id).subscribe(
      res => { this.sys.debug(res); this.request = res; },
      err => { this.sys.error(err); }
    );
  }

}
