import { Component, Input } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})

export class AutoComponent {
  @Input() childAutoList: Post[];
  selectedPost = null;

  posts: Post[] = [
    new Post('2004 Ford Escape', 'January 27th', 'clean title and less than 200,000 miles!', 'David@davidsemail.com'),
    new Post('2016 Volvo C-32', 'October 31st', 'Fast as hell and a cute little hatchback!', 'EdwardCullen@vampire.net')
  ];


  editButtonHasBeenClicked(postToEdit: Post) {
    this.clickSender.emit(postToEdit);
  }
}
