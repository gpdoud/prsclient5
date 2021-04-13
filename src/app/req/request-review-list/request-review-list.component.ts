import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-review-list',
  templateUrl: './request-review-list.component.html',
  styleUrls: ['./request-review-list.component.css']
})
export class RequestReviewListComponent implements OnInit {

  requests: Request[] = [];
  searchCriteria: string = '';
  
  constructor(
    private sys: SystemService,
    private usr: RequestService
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.usr.getReviewed(this.sys.loggedInUser.id).subscribe(
      res => { this.sys.debug(res); this.requests = res; },
      err => { this.sys.error(err); }
    );
  }

}
