import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GithubService} from '../github/github.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public user;

  constructor(private activeRoute: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit() {
    const userId = this.activeRoute.snapshot.params['userId'];
    this.githubService.getUserDetail(userId).subscribe(
      res => {
        this.user = res;
        console.log(this.user);
      }
    )
  }

}
