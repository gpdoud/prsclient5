import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { Request } from '../request.class';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests: Request[] = [];
  searchCriteria: string = '';
  
  constructor(
    private sys: SystemService,
    private usr: RequestService
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.usr.list().subscribe(
      res => { this.sys.debug(res); this.requests = res; },
      err => { this.sys.error(err); }
    );
  }

}
