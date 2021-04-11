import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = null;
  verifyDelete: boolean = false;
  get isAdmin(){ return this.sys.isAdmin };

  constructor(
    private sys: SystemService,
    private usr: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  edit(): void {
    this.router.navigateByUrl(`/prod/edit/${this.product.id}`);
  }

  verify(): void {
    this.verifyDelete = !this.verifyDelete;
  }

  delete(): void {
    console.debug("B4:", this.product);
    this.usr.remove(this.product).subscribe(
      res => { console.debug("Delete Successful!"); this.router.navigateByUrl("/prod/list"); },
      err => { console.error(err); }
    );
  }

  injectVendorName(product: Product) {
    product.vendorName = product.vendor.name;
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    let id = this.route.snapshot.params.id;
    this.usr.get(+id).subscribe(
      res => { console.debug(res); this.injectVendorName(res); this.product = res; },
      err => { console.error(err); }
    );
  }

}
