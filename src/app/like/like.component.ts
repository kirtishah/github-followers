import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
  likesCount: number = 0;
  disLikesCount: number = 0;


  like() {
    this.likesCount += 1;
  }

  dislike() {
    this.disLikesCount += 1;
  }

}
