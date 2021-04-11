import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user: User = null;
  verifyDelete: boolean = false;
  get isAdmin(){ return this.sys.isAdmin };

  constructor(
    private sys: SystemService,
    private usr: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  edit(): void {
    this.router.navigateByUrl(`/user/edit/${this.user.id}`);
  }

  verify(): void {
    this.verifyDelete = !this.verifyDelete;
  }

  delete(): void {
    console.debug("B4:", this.user);
    this.usr.remove(this.user).subscribe(
      res => { console.debug("Delete Successful!"); this.router.navigateByUrl("/user/list"); },
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
