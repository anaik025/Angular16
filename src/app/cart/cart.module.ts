import { NgModule } from "@angular/core";
import { CartComponent } from "./cart.component";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";

const routes: Routes = [
    {
       path:'',
       component:CartComponent
     }
   ];

@NgModule({
    declarations:[CartComponent],
    imports:[FormsModule, RouterModule.forChild(routes),CommonModule ],
    exports:[RouterModule]
})
export class AppCartModule {

}