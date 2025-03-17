import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  standalone: false,
  templateUrl: './property-binding.component.html',
  styleUrl: './property-binding.component.css'
})
export class PropertyBindingComponent {

  active = false;
  title = "This is title, from angular component<b> this is bold</b>";
  ob = {
    color:"red",
    backgroundColor: "black",
  };
  imagePath = "https://picsum.photos/200/300";
}

/*
syntax:
[binding-target]="binding source"
*/
