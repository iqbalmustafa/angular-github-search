import { Component } from '@angular/core';
import { GithubApiService } from './services/github-api.service';
import { Github } from './classes/github';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-github-search';
  searchText = '';
  constructor(private _githubApiService: GithubApiService){}

  listResults: Github[];

  get_results(f: NgForm) {
    console.log('go in here ' + f.value.search);
    this.searchText = f.value.search;
    this._githubApiService.getResults(this.searchText)
    .subscribe(
      data=>
      {
        this.listResults = data.items;
        console.log(this.listResults);
      }
    );
  }
}
