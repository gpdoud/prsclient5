import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';
// import { encrypt } from 'dsi-encrypt-password';
import * as dsi from 'node_modules/dsi-encrypt-password';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  message: string = '';

  constructor(
    private sys: SystemService,
    private usr: UserService,
    private router: Router
  ) { }

  login(): void {
    this.message = '';
    this.user.password = dsi.encrypt(this.user.password);
    this.sys.debug("B4:", this.user);
    this.usr.login(this.user.username, this.user.password).subscribe(
      res => { 
        this.sys.debug("User:", res); 
        this.sys.loggedInUser = res;
        this.router.navigateByUrl("/req/list"); 
      },
      err => { 
        this.sys.error(err); 
        if(err.status == 404) {
          this.message = "Username/Password is not valid.";
        }
      }
    );
  }

  ngOnInit(): void {
    // this.sys.warn("Login user fixed on sa");
    // this.user.username = "sa";
    // this.user.password = "sa";
  }

}
