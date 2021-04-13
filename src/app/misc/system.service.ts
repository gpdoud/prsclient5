import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { config } from 'rxjs';
import { AppInitService } from '../app-init.service';
import { User } from '../user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  get baseurl() { return this.appinit.config.baseurl; }
  loggedInUser: User = null;
  get isAdmin() { return this.loggedInUser != null && this.loggedInUser.isAdmin; }

  constructor(
    private appinit: AppInitService,
    private router: Router
  ) { }

  chkLogin(): void {
    if(this.loggedInUser == null) {
      this.router.navigateByUrl('/login');
      // console.warn("Check for login disabled!");
    }
  }
}
