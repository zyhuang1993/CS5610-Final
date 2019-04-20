import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../service/user.client.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SharedService} from '../../../service/shared.client.service';

@Component({
  selector: 'app-user-review',
  templateUrl: './user-review.component.html',
  styleUrls: ['./user-review.component.css']
})
export class UserReviewComponent implements OnInit {
  reviews: [any];
  reviewerLink = '';
  reviewsLiked: [any];
  currUser: any;
  otherUser: any;
  constructor(private userService: UserService, private router: Router, private sharedService: SharedService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userService.findUserById(this.sharedService.user._id).subscribe(
        (user: any) => {
          this.currUser = user;
        }
      );

      this.userService.findUserByUserName(params['username']).subscribe(
        (user: any) => {
          this.otherUser = user;
          this.reviews = user.reviews;
          this.reviewsLiked = user.likedReview;
          for (let i = 0; i < this.reviews.length; i++) {
            for (let j = 0; j < this.reviewsLiked.length; j++) {
              if (this.reviewsLiked[i].equals(this.reviews[i]._id)) {
                this.reviews[i].likeStatus = 'Unlike';
              }
            }
          }
        }
      );
    });
  }
}
