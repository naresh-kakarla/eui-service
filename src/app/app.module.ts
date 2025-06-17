import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UppercasePipe } from './pipes/uppercase.pipe';

import { UsersModule } from './features/users/users.module';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { ProductDetailsModule } from './features/product-details/product-details.module';
import { ProductDetailsComponent } from './features/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    UppercasePipe,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    DashboardModule,
    ProductDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
