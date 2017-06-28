import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CircularComponent } from './circular/circular.component';
import { SearchComponent } from './search/search.component';
import { GithubService } from './github/github.service';
import {AngularMaterial} from './material/angular.material';
import {appRoutes} from './app.routes';
import {RouterModule} from '@angular/router';
import { UserComponent } from './user/user.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    CircularComponent,
    SearchComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularMaterial,
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
   
  providers:[GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
