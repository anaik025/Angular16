import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { FoodpageComponent } from '../foodpage/foodpage.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  @ViewChild('container',{ static: true, read: ViewContainerRef }) container! : ViewContainerRef;

  ngOnInit(): void {
   
  }

  ngAfterViewInit():void {
    this.container.clear();
    let ref = this.container.createComponent(FoodpageComponent);   
    ref.setInput("id",2);
    ref.changeDetectorRef.detectChanges();
  }
}
