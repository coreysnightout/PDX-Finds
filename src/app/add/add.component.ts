import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent {

  @Output() newPostSender = new EventEmitter();

  submitForm(title: string, date: string, description: string, contact: string) {
    var newPostToAdd: Post = new Post(title, date, description, contact);
    this.newPostSender.emit(newPostToAdd);
  }

}
