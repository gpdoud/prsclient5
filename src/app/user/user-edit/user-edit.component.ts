import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';
import * as dsi from 'node_modules/dsi-encrypt-password';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = null;
  
  constructor(
    private sys: SystemService,
    private usr: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.user.password = dsi.encrypt(this.user.password);
    console.debug("B4:", this.user);
    this.usr.change(this.user).subscribe(
      res => { console.debug(res); this.router.navigateByUrl("/user/list"); },
      err => { console.error(err); }
    );
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params.id;
    this.usr.get(+id).subscribe(
      res => { console.debug(res); this.user = res; },
      err => { console.error(err); }
    );
  }

}
