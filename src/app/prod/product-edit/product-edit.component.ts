import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Vendor } from 'src/app/vend/vendor.class';
import { VendorService } from 'src/app/vend/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product = null;
  vendors: Vendor[] = [];
  
  constructor(
    private sys: SystemService,
    private prd: ProductService,
    private vnd: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    console.debug("B4:", this.product);
    this.prd.change(this.product).subscribe(
      res => { this.sys.debug(res); this.router.navigateByUrl("/prod/list"); },
      err => { this.sys.error(err); }
    );
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.vnd.list().subscribe(
      res => { this.sys.debug(res); this.vendors = res; },
      err => { this.sys.error(err); }
    );
    let id = this.route.snapshot.params.id;
    this.prd.get(+id).subscribe(
      res => { this.sys.debug(res); this.product = res; },
      err => { this.sys.error(err); }
    );
  }

}
