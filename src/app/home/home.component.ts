import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/model/food';
import { ActivatedRoute } from '@angular/router';
import { MessagingService } from '../services/messaging/messaging.service';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
    foods:Foods[] = [];
    selectedFoodId:number = 0;
    showProp:boolean = false;

    subscription!:Subscription;

    @ViewChild('dialog') dialog!:ElementRef<any>;

    constructor(private fs:FoodService, private router:ActivatedRoute,
      private messaging:MessagingService, private cartService:CartService){

    }

      ngOnInit(): void {
        this.foods = this.fs.getAll();

        this.router.params.subscribe(param=>{
          if(param["searchItem"]){
            this.foods= this.fs.getAll().filter(food=> food.name.toLocaleLowerCase().includes(param["searchItem"].toLocaleLowerCase()));
          }
          else {
            this.foods = this.fs.getAll();
          }
        });

        this.subscription = this.messaging.onMessage().subscribe(data=>{
        this.showProp=false;
        this.dialog.nativeElement.close();
        });
        
      }
    
      openProperty(id:number,dialog:any) {
        this.selectedFoodId=id;
        this.showProp=true;
        dialog.show();
      }

      updateFood(food:Foods){
        this.foods.find(i=> i.id === food.id)!.price = food.price;
        this.showProp=false;
        this.dialog.nativeElement.close();
        
      }

      addToCart(food:Foods){
        sessionStorage.setItem("added","yes");
        this.cartService.addToCart(food);
      }
}
