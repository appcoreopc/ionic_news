import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewsService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class NewsService {

  _http: Http
  _data: any;

  constructor(public http: Http) {
    this._http = http;
  }

  getNews(url: string) {
    if (this._data) {
      return Promise.resolve(this._data);
    }

    return new Promise(resolve => {
      this._http.get(url).map(x => x.json()).subscribe(data => {
        this._data = data.results;
        console.log(data);
        resolve(this._data);
      })
    });
  }
}
