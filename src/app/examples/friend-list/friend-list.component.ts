import { Component, Input } from '@angular/core';
import { Person } from '../../models/Person';

@Component({
  selector: 'app-friend-list',
  standalone: false,
  templateUrl: './friend-list.component.html',
  styleUrl: './friend-list.component.css'
})
export class FriendListComponent {

  @Input() friendsList = [
    new Person("Giyu", "demon slayer", 123456),
    new Person("eren yeger", "AOT", 123456),
    new Person("tohsaka rin", "fate", 123456),
    new Person("valkarie", "thor", 123456)
  ]

}
