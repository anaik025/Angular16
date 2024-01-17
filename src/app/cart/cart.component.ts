import { AfterViewInit, Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FoodpageComponent } from '../foodpage/foodpage.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit , AfterViewInit{

  @ViewChild('container',{ static: true, read: ViewContainerRef }) container! : ViewContainerRef;

  ngOnInit(): void {
   
  }

  ngAfterViewInit():void {
    this.container.clear();
    let ref = this.container.createComponent(FoodpageComponent);
    // ref.instance.id = 2;
    ref.setInput("id",2);
    ref.changeDetectorRef.detectChanges();
  }
}
