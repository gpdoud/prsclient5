import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from 'src/app/vend/vendor.class';
import { VendorService } from 'src/app/vend/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[] = [];

  constructor(
    private sys: SystemService,
    private prd: ProductService,
    private vnd: VendorService,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.product);
    this.prd.create(this.product).subscribe(
      res => { console.debug(res); this.router.navigateByUrl("/prod/list"); },
      err => { console.error(err); }
      );
    }
    
  ngOnInit(): void {
    this.sys.chkLogin();
    this.vnd.list().subscribe(
      res => { console.debug(res); this.vendors = res; },
      err => { console.error(err); }
    );
  }

}
