import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodpageComponent } from './foodpage.component';
import { FoodService } from '../services/food/food.service';
import { MessagingService } from '../services/messaging/messaging.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('FoodpageComponent', () => {
  let component: FoodpageComponent;
  let fixture: ComponentFixture<FoodpageComponent>;
  let mockFoodService:jasmine.SpyObj<FoodService>;
  mockFoodService = jasmine.createSpyObj('FoodService',['getFoodById']);

  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[FormsModule, ReactiveFormsModule],
      declarations: [FoodpageComponent],
      providers:[ { provide :FoodService, useValue:mockFoodService},MessagingService]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FoodpageComponent);
    component = fixture.componentInstance;   

  });

  it('should create', () => {
    
    expect(component).toBeTruthy();
  });

  it('should get food by id',() =>{
    mockFoodService.getFoodById.and.returnValue({
      id:2,cookTime:1,favorite:true,imageUrl:'',name:'cake',origin:'',price:100,star:3
    });

   
    component.id = 2;
    fixture.detectChanges();
    expect(component.food.id).toEqual(2);
  });

  it('should set name value',() =>{
    mockFoodService.getFoodById.and.returnValue({
      id:1,cookTime:1,favorite:true,imageUrl:'',name:'cake',origin:'',price:100,star:3
    });
    component.id = 1;
    fixture.detectChanges();
    expect(component.food.id).toEqual(1);
    expect(component.foodForm.controls["name"].value).toEqual("cake");
  });
});
