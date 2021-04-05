import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();

  constructor(
    private sys: SystemService,
    private req: RequestService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.request);
    this.req.create(this.request).subscribe(
      res => { console.debug(res); this.router.navigateByUrl("/req/list"); },
      err => { console.error(err); }
    );
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.request.userId = this.sys.loggedInUser.id;
  }

}
