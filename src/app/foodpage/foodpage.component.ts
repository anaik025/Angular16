import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/model/food';
import { MessagingService } from '../services/messaging/messaging.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrl: './foodpage.component.css'
})
export class FoodpageComponent implements OnInit {

  @Input() id!:number;
  @Output() saveFood = new EventEmitter();

  foodForm!:FormGroup;

  food!: Foods;
  constructor(private fs:FoodService, private messaging:MessagingService, private fb:FormBuilder){
    this.foodForm = this.fb.group({
      id : new FormControl<number>(0),
      name:new FormControl<string>("",Validators.required),
      price:new FormControl<number>(0,Validators.min(0))
    });
  }

  ngOnInit(): void {
    this.food = this.fs.getFoodById(this.id);
   
    this.foodForm.get("id")?.setValue(this.food.id);
    this.foodForm.get("name")?.setValue(this.food.name);
    this.foodForm.get("price")?.setValue(this.food.price);
  }

  save(){
    this.saveFood.emit(this.food);
  }

  cancel(){
    this.messaging.sendMessage("close");
  }
}
