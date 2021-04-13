import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/misc/system.service';
import { Product } from 'src/app/prod/product.class';
import { ProductService } from 'src/app/prod/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline: Requestline = null;
  products: Product[] = [];
  
  constructor(
    private sys: SystemService,
    private reql: RequestlineService,
    private prd: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  save(): void {
    this.requestline.productId = +this.requestline.productId;
    this.sys.debug("B4:", this.requestline); 
    this.reql.change(this.requestline).subscribe(
      res => { this.sys.debug(res); this.router.navigateByUrl(`/req/lines/${this.requestline.requestId}`) },
      err => { this.sys.error(err); }    
    );
  }

  ngOnInit(): void {
    this.sys.chkLogin();
    this.prd.list().subscribe(
      res => { this.sys.debug(res); this.products = res; },
      err => { this.sys.error(err); }    );
    let id = this.route.snapshot.params.id;
    this.reql.get(+id).subscribe(
      res => { this.sys.debug(res); this.requestline = res; },
      err => { this.sys.error(err); }
    );
  }

}
