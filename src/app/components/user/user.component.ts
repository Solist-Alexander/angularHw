import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IUser} from "../../interfaces/user.interface";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent  {
  @Input()
  user: IUser;

  @Output()
  getPostsEvent = new EventEmitter<IUser>()

  getPosts(): void {
    this.getPostsEvent.emit(this.user)
  }
}
