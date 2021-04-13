import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

  request: Request = null;
  
  constructor(
    private sys: SystemService,
    private req: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.request);
    this.req.change(this.request).subscribe(
      res => { this.sys.debug(res); this.router.navigateByUrl("/req/list"); },
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
