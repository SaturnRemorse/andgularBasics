import { Component } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  standalone: false,
  templateUrl: './twoway-binding.component.html',
  styleUrl: './twoway-binding.component.css'
})
export class TwowayBindingComponent {

  title="Sachin";

  // changeValue(event: Event){
  //   let inputField= event.target as HTMLInputElement;
  //   this.title = inputField.value;
  // }

  clearField(){

  }

}
//[] + () = [()]

