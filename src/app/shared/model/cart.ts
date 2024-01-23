import { CartItem } from "./cartitem";

export class Cart {
    items:CartItem[] = [];
    get totalPrice(): number {
        let total = 0;
        this.items.forEach(i=>{
            total = total + i.price;
        });

        return total;
    }
}