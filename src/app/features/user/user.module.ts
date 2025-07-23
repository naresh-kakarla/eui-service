import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AddressBookComponent } from './components/address-book/address-book.component';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    ProfileComponent,
    AddressBookComponent,
    SettingsComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
