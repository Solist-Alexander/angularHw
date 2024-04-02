import {Component, EventEmitter, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user.interface";
import {UserComponent} from "../user/user.component";
import {NgForOf} from "@angular/common";
import {UserPostComponent} from "../user-post/user-post.component";
import {IPost} from "../../interfaces/post.interface";
import {PostService} from "../../services/post.service";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    UserPostComponent,
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent  implements OnInit{
  users: IUser[];
  posts: IPost[]

  constructor(private userService: UserService,
              private postService: PostService) {
  }


  getPostsEvent = new EventEmitter<number>();
  ngOnInit():void {
    this.userService.getAll().subscribe(value => this.users = value)

  }


  getPosts(user: IUser) {
    this.postService.getAll(user.id).subscribe(value => this.posts = value)
  }
}
