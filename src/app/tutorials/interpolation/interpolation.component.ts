import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  standalone: false,
  templateUrl: './interpolation.component.html',
  styleUrl: './interpolation.component.css'
})
export class InterpolationComponent {

  firstName="Tohsaka";
  lastName="Rin";
  fullName=this.firstName+this.lastName;
  address="fate";
  laptops=['macbook','thinkpad'];
  currentDate = new Date();

  getFullName(){
    return this.firstName + " "+this.lastName;
  }

  getNameInCaps(){
    return (this.getFullName()).toUpperCase();
  }

  getReverseOfName(){
    let rev = "";
    for(let i = this.getFullName().length-1;i>=0;i--){
      rev+=this.getFullName().charAt(i);
    }
    return rev;
  }

}

/*
Data Logic -ts
dynamic data can be brought with interpolation: allow to include expression
syntax:
{{expression}} to be added in template

important points: 
1. it is a one way data binding
2. we cannot make use of following
   - Assignment +=,-=,*= cannot be used in template
   - keywords cannot be used
   - increment and decrement
   - bitwise operator cannot be used logical can be used
   
*/
