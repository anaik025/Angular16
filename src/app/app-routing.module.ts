import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppCartModule } from './cart/cart.module';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"search/:searchItem",
    component:HomeComponent
  },
  {
    path:"viewcart",
    loadChildren:()=> import("./cart/cart.module").then(m=>m.AppCartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
