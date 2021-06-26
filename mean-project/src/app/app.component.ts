import { Component } from '@angular/core';
import { Post } from './posts/post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedPosts: Post[] = [];

  onPostAdded(post) {
    this.storedPosts.push(post);
    // this.storedPosts.push({'content': 'as', 'title': 'as'}); --> this won't return an error, but other formats will .
  }
}
