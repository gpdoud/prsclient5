import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Product } from 'src/app/prod/product.class';
import { ProductService } from 'src/app/prod/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline: Requestline = new Requestline();
  products: Product[] = [];

  constructor(
    private sys: SystemService,
    private reql: RequestlineService,
    private prd: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  save(): void {
    this.requestline.productId = +this.requestline.productId;
    this.reql.create(this.requestline).subscribe(
      res => { this.sys.debug(res); this.router.navigateByUrl(`/req/lines/${this.requestline.requestId}`) },
      err => { this.sys.error(err); }      
    );
  }

  ngOnInit(): void {
    this.prd.list().subscribe(
      res => { this.sys.debug(res); this.products = res; },
      err => { this.sys.error(err); }
    );
    this.requestline.requestId = +this.route.snapshot.params.rid;
  }

}
