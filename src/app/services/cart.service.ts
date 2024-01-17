import { Injectable } from '@angular/core';
import { Cart } from '../shared/model/cart';
import { Foods } from '../shared/model/food';
import { CartItem } from '../shared/model/cartitem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart:Cart = new Cart();

  addToCart(food:Foods):void {
    let cartItem = this.cart.items.find(i=> i.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity + 1);
      return;
    }

    this.cart.items.push(new CartItem(food));
  }

  removeFromCart(food:Foods):void {
    let cartItem = this.cart.items.find(i=> i.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id,cartItem.quantity - 1);
      return;
    }
  }

  changeQuantity(id:number,quantity:number):void{
    if(this.cart.items.find(i=> i.food.id === id)){
      this.cart.items.find(i=> i.food.id === id)!.quantity = quantity;
    }    
  }

  getCart():Cart {
    return this.cart;
  }
  
  constructor() { }
}
