import { Component, OnInit, ɵɵqueryRefresh } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Requestline } from 'src/app/reql/requestline.class';
import { RequestlineService } from 'src/app/reql/requestline.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrls: ['./request-lines.component.css']
})
export class RequestLinesComponent implements OnInit {

  request: Request = null;
  verifyDelete: boolean = false;

  constructor(
    private sys: SystemService,
    private req: RequestService,
    private reql: RequestlineService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  create(requestId: number) {
    this.router.navigateByUrl(`/reql/create/${requestId}`);
  }

  edit(id: number): void {
    this.router.navigateByUrl(`/reql/edit/${id}`);
  }

  delete(requestline: Requestline): void {
    this.reql.remove(requestline).subscribe(
      res => { this.sys.debug(res); this.refresh(); },
      err => { this.sys.error(err); }
    );
  }

  review(): void {
    this.req.setReview(this.request).subscribe(
      res => { this.sys.debug(res); this.refresh(); }
    );
  }

  refresh(): void {
    let id = this.route.snapshot.params.id;
    this.req.get(+id).subscribe(
      res => { this.sys.debug(res); this.request = res; },
      err => { this.sys.error(err); }
    );    
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.refresh();
  }

}
