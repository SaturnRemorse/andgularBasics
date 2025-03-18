import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  standalone: false,
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent implements OnInit{

  ngOnInit(): void {
      this.customEventEmitter.emit(this.counter);
  }
  @Input() counter = 0;

  @Output() customEventEmitter= new EventEmitter<number>();

  increaseCounter(){
    this.counter++;
    this.customEventEmitter.emit(this.counter);
  }



}
