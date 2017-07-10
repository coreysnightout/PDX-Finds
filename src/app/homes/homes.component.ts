import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent {
  @Input() childHomeList: Post[];
  // @Input() doneButtonClickedSender = new EventEmitter();

  @Output() clickSender = new EventEmitter();

  selectedPost = null;

  posts: Post[] = [
    new Post('Water-Front Fantasy Hedonistic Escape', 'January 27th', 'wood floors water front view and golf course', 'David@davidsemail.com'),
    new Post('Forest Getaway', 'October 31st', 'Quiet secluded and massive', 'johnsmith@johndoe')
  ];

  editButtonHasBeenClicked(postToEdit: Post) {
    console.log(postToEdit);
    this.selectedPost = postToEdit;
  }

  finishedEditing() {
    this.selectedPost = null;
  }

  addPost(newPostfromChild: Post){
    this.posts.push(newPostfromChild);
  }
}
