import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Requestline } from 'src/app/reql/requestline.class';
import { RequestlineService } from 'src/app/reql/requestline.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-item',
  templateUrl: './request-review-item.component.html',
  styleUrls: ['./request-review-item.component.css']
})
export class RequestReviewItemComponent implements OnInit {

  request: Request = null;
  verifyReject: boolean = false;

  constructor(
    private sys: SystemService,
    private req: RequestService,
    private reql: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  approve(): void {
    this.request.rejectionReason = '';
    this.req.setApproved(this.request).subscribe(
      res => { console.debug(res); this.refresh(); }
    );
  }

  verify(): void {
    this.verifyReject = !this.verifyReject;
  }

  reject(): void {
    this.req.setRejected(this.request).subscribe(
      res => { console.debug(res); this.refresh(); this.verify(); }
    );
  }

  refresh(): void {
    let id = this.route.snapshot.params.id;
    this.req.get(+id).subscribe(
      res => { console.debug(res); this.request = res; },
      err => { console.error(err); }
    );    
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.refresh();
  }

}
