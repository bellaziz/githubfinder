import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github/github.service';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {

  public searchText;
  public pageNumber: number = 1;
  public perPage: number = 8;
  public total : number;
  public p:number = 1;
  public loading:boolean;

  public users : Observable<any>;


  constructor(private githubService : GithubService, private router : Router) { }


  ngOnInit() {
    
  }

  onKeyup(event){
    this.searchText = event.target.value;
  }

  getUsers(pageNumber){
    this.loading = true;
    this.users = this.githubService.getUsers(this.searchText, pageNumber, this.perPage).do(
      res=>{
        this.total = res.total_count;
        this.p = pageNumber;
        this.loading = false;
      }
    ).map(
       res=> res.items
    );
  }

  getFirstPageUsers(){
    this.getUsers(1);
    this.users.subscribe();
  }

  showUserDetail(user) {
    this.router.navigate(['user', user.login]);
  }

}
