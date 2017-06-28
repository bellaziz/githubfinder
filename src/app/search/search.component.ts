import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  public searchText;
  public users;

  constructor(private githubService : GithubService, private router : Router) { }

  ngOnInit() {
    
  }

  onKeyup(event){
    this.searchText = event.target.value;
  }

  getUsers(){
    this.githubService.getUsers(this.searchText).subscribe(
      res=>{
        this.users = res;
      }
    );
  }

  showUserDetail(user) {
    this.router.navigate(['user', user.login]);
  }

}
