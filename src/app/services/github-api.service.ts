import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class GithubApiService{

    url: string = "https://api.github.com/search/repositories?per_page=10&amp;q=";
    constructor(private _httpclient: HttpClient) {}
    getResults(query: string): Observable<any>{
        return this._httpclient.get(this.url + query);
    }
}