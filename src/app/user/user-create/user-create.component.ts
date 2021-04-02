import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  user: User = new User();

  constructor(
    private sys: SystemService,
    private usr: UserService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.user);
    this.usr.create(this.user).subscribe(
      res => { console.debug(res); this.router.navigateByUrl("/user/list"); },
      err => { console.error(err); }
    );
  }

  ngOnInit(): void {
  }

}
