import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  standalone: false,
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {

  styleOb={
    color:"black",
  };

  active = false;
  counter = 0;

  buttonClick(){
    this.styleOb.color="red";
    //this.active = true;
  }
  increaseCount(event: MouseEvent){
    console.log(event);
    this.counter++;
  }

  mouseEnterEvent(){
    alert('Mouse Entered');
  }

  getInput(event: KeyboardEvent, inputField: HTMLInputElement){
    console.log(event.target)
    let  key = event.target as HTMLInputElement;
    console.log(key.value);
    console.log(inputField.value)
  }
  getInput1(event: Event, inputField: HTMLInputElement){
    console.log("enter button pressed")
    console.log(inputField.value);
    
  }

}
/*
Event Binding:

(target-event)="statement"
*/
