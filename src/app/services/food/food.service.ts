import { Injectable } from '@angular/core';
import { Foods } from '../../shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[] {
    var data:Foods[] = [
      {
        cookTime :10,
        favorite:true,
        id:1,
        imageUrl:"/assets/images/ash.jpg",
        name:"ash",
        origin:"Europe",
        price:200,
        star:3,
        tags:[]
      },
      {
        cookTime :5,
        favorite:true,
        id:2,
        imageUrl:"/assets/images/burger.jpg",
        name:"burger",
        origin:"USA",
        price:100,
        star:3,
        tags:[]
      },
      {
        cookTime :10,
        favorite:false,
        id:3,
        imageUrl:"/assets/images/cake.jpg",
        name:"cake",
        origin:"USA",
        price:50,
        star:3,
        tags:[]
      },
      {
        cookTime :80,
        favorite:false,
        id:4,
        imageUrl:"/assets/images/pasta.jpg",
        name:"pasta",
        origin:"Europe",
        price:150,
        star:4,
        tags:[]
      },
      {
        cookTime :100,
        favorite:true,
        id:5,
        imageUrl:"/assets/images/salad.jpg",
        name:"salad",
        origin:"Europe",
        price:200,
        star:2,
        tags:[]
      }
    ];

    return data;
  }

  getFoodById(id:number):Foods {
    return this.getAll().find(i=>i.id===id)!;
  }
}
