import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-dating',
  templateUrl: './dating.component.html',
  styleUrls: ['./dating.component.css']
})
export class DatingComponent {
  @Input() childDatingList: Post[];
  // @Input() doneButtonClickedSender = new EventEmitter();

  @Output() clickSender = new EventEmitter();

  selectedPost = null;

  posts: Post[] = [
    new Post('Jenny Hernandez', 'October 17th', 'Nice lady, great attitude. Likes Dudes.', 'Jenny@jejen.com'),
    new Post('Terry Smith', 'March 31st', 'All American, Cool dude, likes the ladies', 'terry@gmail.com')
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
