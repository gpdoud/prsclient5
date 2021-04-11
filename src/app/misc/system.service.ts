import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user/user.class';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  loggedInUser: User = null;
  get isAdmin() { return this.loggedInUser != null && this.loggedInUser.isAdmin; }

  constructor(
    private router: Router
  ) { }

  chkLogin(): void {
    if(this.loggedInUser == null) {
      this.router.navigateByUrl('/login');
      // console.warn("Check for login disabled!");
    }
  }
}
