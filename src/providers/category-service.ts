import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  _http: Http
  _data: any;
  _baseApiUrl: string = "https://newsapi.org/v1/sources?category=";
  _baseLanguage : string = "&language=en";
  _url: string;
  _source: string = "&apiKey=22f66588d55e4db88dabda8f03aa598c";

  constructor(public http: Http) {
    this._http = http;
  }

  refresh() {
    return this.getSourceList(this._url);
  }

  getSourceList(categorySource: string) {

    if (this._source == categorySource) {
      if (this._data) {
        return Promise.resolve(this._data);
      }
    }

    // fetching different source //
    this._source = categorySource;
    this._url = this._baseApiUrl + categorySource;

    return new Promise(resolve => {
      this._http.get(this._url).map(x => x.json()).subscribe(data => {
        this._data = data.sources;
        resolve(this._data);
      })
    });
  }
}
