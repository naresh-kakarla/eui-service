import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/dashboard/home/home.component';

const routes: Routes = [
  {
    path:'users',
    loadChildren:()=> import('./features/users/users.module').then(userModule => userModule.UsersModule)
  },

  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'productDetails',
    loadChildren:()=>import('./features/product-details/product-details.module').then(prod=>prod.ProductDetailsModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
