import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  standalone: false,
  templateUrl: './child-comp.component.html',
  styleUrl: './child-comp.component.css'
})
export class ChildCompComponent {
  @Input() counter = 0;

}
