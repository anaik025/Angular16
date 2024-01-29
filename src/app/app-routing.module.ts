import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppCartModule } from './cart/cart.module';
import { LoginComponent } from './login/login.component';
import { authGuard } from './guards/auth.guard';
import { dirtycheckGuard } from './guards/dirtycheck.guard';

const routes: Routes = [
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"home",
    component:HomeComponent,
    canActivate:[authGuard],
    canDeactivate:[dirtycheckGuard]
  },
  {
    path:"search/:searchItem",
    component:HomeComponent,
    canActivate:[authGuard]
  },
  {
    path:"viewcart",
    loadChildren:()=> import("./cart/cart.module").then(m=>m.AppCartModule),
    canActivate:[authGuard],
    canDeactivate:[dirtycheckGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
