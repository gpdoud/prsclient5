import { Component, OnInit } from '@angular/core';
import { SystemService } from 'src/app/misc/system.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  searchCriteria: string = '';
  get isAdmin(){ return this.sys.isAdmin };
  
  constructor(
    private sys: SystemService,
    private usr: ProductService
  ) { }



  ngOnInit(): void {
    this.sys.chkLogin();
    this.usr.list().subscribe(
      res => { this.sys.debug(res); this.products = res; },
      err => { this.sys.error(err); }
    );
  }

}
