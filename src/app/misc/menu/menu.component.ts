import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user/user.class';
import { Menu } from '../menu.class';
import { SystemService } from '../system.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user: User = new User();
  get isReviewer() { return this.user.isReviewer; }

  menus: Menu[] = [
    new Menu("Home", "/home"),
    new Menu("Users", "/user/list"),
    new Menu("Vendors", "/vend/list"),
    new Menu("Products", "/prod/list"),
    new Menu("Requests", "/req/list"),
    new Menu("Reviews", "/req/review/list"),
    new Menu("Login", "/login"),
  ]
  
  constructor(
    private sys: SystemService
  ) { }

  ngOnInit(): void {
    this.user = this.sys.loggedInUser;
  }

}
