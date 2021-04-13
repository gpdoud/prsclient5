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

  debug(msg1: any, msg2: any = '', msg3: any = '', msg4: any = '', msg5: any = ''): void { 
    if(this.appinit.config.debug) {
      console.debug("[DEBUG] ", msg1, msg2, msg3, msg4, msg5);
    }
  }
  error(msg1: any, msg2: any = '', msg3: any = '', msg4: any = '', msg5: any = ''): void { 
    if(this.appinit.config.debug) {
      console.error("[ERR ] ", msg1, msg2, msg3, msg4, msg5);
    }
  }
  warn(msg1: any, msg2: any = '', msg3: any = '', msg4: any = '', msg5: any = ''): void { 
    if(this.appinit.config.debug) {
      console.warn("[WARN] ", msg1, msg2, msg3, msg4, msg5);
    }
  }
  log(msg1: any, msg2: any = '', msg3: any = '', msg4: any = '', msg5: any = ''): void { 
    if(this.appinit.config.debug) {
      console.log("[INFO] ", msg1, msg2, msg3, msg4, msg5);
    }
  }

  constructor(
    private appinit: AppInitService,
    private router: Router
  ) { 
    this.debug(this.appinit.config);
  }

  chkLogin(): void {
    if(this.loggedInUser == null) {
      this.router.navigateByUrl('/login');
      // console.warn("Check for login disabled!");
    }
  }
}
