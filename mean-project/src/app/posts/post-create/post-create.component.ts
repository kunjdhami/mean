import { Component } from "@angular/core";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html'
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = 'no text';

  onAddPost() {
    this.newPost = this.enteredValue;
  }

  // onChangePost() {
  //   this.enteredValue = 'heyyo';
  // }
}
