import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {
  @Input() childMusicList: Post[];
  // @Input() doneButtonClickedSender = new EventEmitter();

  @Output() clickSender = new EventEmitter();

  selectedPost = null;

  posts: Post[] = [
    new Post('Fender Semi Hollow Body Telecaster', 'January 17th', 'sunburnt body maple neck', 'David@davidsemail.com'),
    new Post('Fender Super Sonic 120 Watt', 'October 31st', 'Loud and juicy with SICK reverb', 'johnsmith@johndoe')
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
