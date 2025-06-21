import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsRoutingModule } from './product-details/product-details-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';



@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductDetailsRoutingModule,
    MatGridListModule
  ]
})
export class ProductDetailsModule { }
