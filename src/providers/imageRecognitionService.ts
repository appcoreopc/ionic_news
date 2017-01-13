import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the NewsService provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class NewsService {

  _http: Http
  headers: Headers;
  options: RequestOptions;

  constructor(public http: Http) {
    this._http = http;
    this.headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': 'f7ea0d204d5b49a8b51608c1cdf6affd',
    });
  }

  //'http://www2.pictures.zimbio.com/gi/Andy+Lau+Simple+Life+Portrait+Session+Venice+CszVsXFIHXRl.jpg'
  analyze(source: string) {

    return new Promise(resolve => {
      this.http.post("https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Categories&language=en", {
        url: source
      }, this.options).map(a => a.json())
        .subscribe(data => {
          console.log(data);
          resolve(data);
        }, error => {
          console.log(error);
        })
    });
  }


  describe(source: string) {
    return new Promise(resolve => {
      this.http.post("https://api.projectoxford.ai/vision/v1.0/describe?maxCandidates=1", {
        url: source
      }, this.options).map(a => a.json())
        .subscribe(data => {
          console.log(data);
          resolve(data)
        }, error => {
          console.log(error);
        })
    });
  }

  tag(source: string) {

    return new Promise(resolve => {
      this.http.post("https://api.projectoxford.ai/vision/v1.0/tag", {
        url: source
      }, this.options).map(a => a.json())
      .subscribe(data => {
        console.log(data);
        resolve(data);
      }, error => {
        console.log(error);
      })
    });
  }

}
