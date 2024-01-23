import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FoodpageComponent } from '../foodpage/foodpage.component';
import { CartService } from '../services/cart.service';
import { Cart } from '../shared/model/cart';
import { CartItem } from '../shared/model/cartitem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {

 carts: Cart;
 total:number;
 cartItems: CartItem[];
 constructor(private cartService: CartService){
    this.carts = this.cartService.getCart();
    if(this.carts){
      this.total = this.carts.totalPrice;
      this.cartItems = this.carts.items;
    }
    else{
      this.total = 0;
      this.cartItems = [];
    }
   
 }

  ngOnInit(): void {
  }
}
