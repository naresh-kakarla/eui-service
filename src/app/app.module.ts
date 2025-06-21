import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule, MatIconAnchor, MatIconButton } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './features/dashboard/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UppercasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
