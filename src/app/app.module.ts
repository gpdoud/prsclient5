import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import * as comp from '.';
import { BoolDisplayPipe } from './misc/bool-display.pipe';
import { SearchUserPipe } from './misc/search-user.pipe';
import { SearchVendorPipe } from './misc/search-vendor.pipe';
import { SearchProductPipe } from './misc/search-product.pipe';
import { SearchRequestPipe } from './misc/search-request.pipe';
import { ReviewerFilterPipe } from './misc/reviewer-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    comp.ProductListComponent, comp.ProductDetailComponent, comp.ProductEditComponent, comp.ProductCreateComponent, 
    comp.UserListComponent,comp.UserDetailComponent,comp.UserEditComponent,
    comp.UserCreateComponent,comp.UserLoginComponent,
    comp.VendorListComponent, comp.VendorDetailComponent, comp.VendorCreateComponent, 
    comp.VendorEditComponent, comp.VendorPoComponent,
    comp.RequestListComponent, comp.RequestDetailComponent, comp.RequestEditComponent, comp.RequestCreateComponent, 
    comp.RequestLinesComponent, comp.RequestReviewListComponent, comp.RequestReviewItemComponent, 
    comp.RequestlineCreateComponent, comp.RequestlineEditComponent,
    comp.MenuComponent,comp.MenuitemComponent,
    comp.E404Component,
    BoolDisplayPipe,
    SearchUserPipe,
    SearchVendorPipe,
    SearchProductPipe,
    SearchRequestPipe,
    ReviewerFilterPipe
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
