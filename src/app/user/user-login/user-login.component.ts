import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

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
    console.debug("B4:", this.user);
    this.usr.login(this.user.username, this.user.password).subscribe(
      res => { console.debug("User:", res); this.router.navigateByUrl("/req/list"); },
      err => { 
        console.debug(err); 
        if(err.status == 404) {
          this.message = "Username/Password is not valid.";
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
