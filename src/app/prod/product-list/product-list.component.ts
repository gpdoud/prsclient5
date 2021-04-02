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
  
  constructor(
    private sys: SystemService,
    private usr: ProductService
  ) { }

  injectVendorName(products: Product[]) {
    for(let p of products) {
      p.vendorName = p.vendor.name;
    }
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.usr.list().subscribe(
      res => { console.debug(res); this.injectVendorName(res); this.products = res; },
      err => { console.error(err); }
    );
  }

}
