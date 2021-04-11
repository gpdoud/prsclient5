import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];
  searchCriteria: string = '';
  get isAdmin(){ return this.sys.isAdmin };
  
  constructor(
    private sys: SystemService,
    private usr: UserService
  ) { }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.usr.list().subscribe(
      res => { console.debug(res); this.users = res; },
      err => { console.error(err); }
    );
  }

}
