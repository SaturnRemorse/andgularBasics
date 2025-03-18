import { Component } from '@angular/core';
import { Person } from '../../models/Person';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  name="Tohsaka";
  contact="9087765432";
  list = [
    new Person("joey", "friends", 123455)
  ];

}
