import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  standalone: false,
  templateUrl: './parent-comp.component.html',
  styleUrl: './parent-comp.component.css'
})
export class ParentCompComponent {

  parentCounter = 0;
  parentMethod(event: number){
    this.parentCounter = event;
  }

}
