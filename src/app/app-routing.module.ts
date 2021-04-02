import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import * as comp from './index';

const routes: Routes = [
  { path: '', redirectTo: '/user/list', pathMatch: 'full' },

  { path: 'prod/list', component: comp.ProductListComponent },
  { path: 'prod/detail/:id', component: comp.ProductDetailComponent },
  { path: 'prod/create', component: comp.ProductCreateComponent },
  { path: 'prod/edit/:id', component: comp.ProductEditComponent },

  { path: 'req/list', component: comp.RequestListComponent },
  { path: 'req/detail/:id', component: comp.RequestDetailComponent },
  { path: 'req/create', component: comp.RequestCreateComponent },
  { path: 'req/edit/:id', component: comp.RequestEditComponent },
  { path: 'req/review', component: comp.RequestReviewListComponent },
  { path: 'req/review/:id', component: comp.RequestReviewItemComponent },

  { path: 'reql/create/:rid', component: comp.RequestlineCreateComponent },
  { path: 'reql/edit/:id', component: comp.RequestlineEditComponent },

  { path: 'user/list', component: comp.UserListComponent },
  { path: 'user/create', component: comp.UserCreateComponent },
  { path: 'user/detail/:id', component: comp.UserDetailComponent },
  { path: 'user/edit/:id', component: comp.UserEditComponent },
  { path: 'login', component: comp.UserLoginComponent },
  
  { path: 'vend/list', component: comp.VendorListComponent },
  { path: 'vend/detail/:id', component: comp.VendorDetailComponent },
  { path: 'vend/create', component: comp.VendorCreateComponent },
  { path: 'vend/edit/:id', component: comp.VendorEditComponent },

  { path: '**', component: comp.E404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
