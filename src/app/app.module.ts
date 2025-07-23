import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatIconAnchor, MatIconButton } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './features/dashboard/home/home.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { CategoryComponent } from './features/category/category.component';
import { ElectronicsComponent } from './features/dashboard/electronics/electronics.component';


@NgModule({
    declarations: [
    AppComponent,
    HomeComponent,
    UppercasePipe,
    CategoryComponent,
    ElectronicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    
   

  ],
  providers: [
     {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
