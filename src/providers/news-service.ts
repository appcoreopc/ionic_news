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
  _apiUrl : string = "https://newsapi.org/v1/articles?apiKey=22f66588d55e4db88dabda8f03aa598c&source="; 
  _url : string; 
  _source : string = "";

  constructor(public http: Http) {
    this._http = http;
  }

  refresh() { 
    return this.getNews(this._url);
  }

  getNews(source: string) {
    
    if (this._source == source)
    {
      if (this._data) {
        return Promise.resolve(this._data);
      }
    }
    
    // fetching different source //
    this._source = source;
    this._url = this._apiUrl + source;
    
    return new Promise(resolve => {
      this._http.get(this._url).map(x => x.json()).subscribe(data => {
        this._data = data.articles;
        console.log(this._data);
        resolve(this._data);
      })
    });
  }
}
