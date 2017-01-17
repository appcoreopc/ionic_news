import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileTransferService } from '../../providers/FileTransferService'
import { Http, Headers, RequestOptions } from '@angular/http';
import {PayPal, PayPalPayment, PayPalConfiguration} from "ionic-native";


@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  service: FileTransferService;

  constructor(public navCtrl: NavController, private http: Http) {
    this.service = new FileTransferService();
  }

  post() {
    //this.service.upload("test");

    let headers = new Headers({
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key': 'f7ea0d204d5b49a8b51608c1cdf6affd',
    });
    let options = new RequestOptions({ headers: headers });

    // this.http.post("https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Categories&language=en", {
    //   url: 'http://www2.pictures.zimbio.com/gi/Andy+Lau+Simple+Life+Portrait+Session+Venice+CszVsXFIHXRl.jpg'
    // }, options).map(a => {
    //   a.json();
    // }).subscribe(data => {
    //   console.log(data);
    // });

    // this.http.post("https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Categories&language=en", {
    //   url: 'http://www2.pictures.zimbio.com/gi/Andy+Lau+Simple+Life+Portrait+Session+Venice+CszVsXFIHXRl.jpg'
    // }, options).toPromise().then(data => {
    //   console.log(data);
    // });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // this.http.post("https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Categories&language=en", {
    //   url: 'http://www2.pictures.zimbio.com/gi/Andy+Lau+Simple+Life+Portrait+Session+Venice+CszVsXFIHXRl.jpg'
    // }, options).map(a => a.json())
    // .subscribe(data => {
    //     console.log(data);
    // }, error => {
    //   console.log(error);
    // });


    //   this.http.post("https://api.projectoxford.ai/vision/v1.0/describe?maxCandidates=1", {
    //   url: 'http://www2.pictures.zimbio.com/gi/Andy+Lau+Simple+Life+Portrait+Session+Venice+CszVsXFIHXRl.jpg'
    // }, options).map(a => a.json())
    // .subscribe(data => {
    //     console.log(data);
    // }, error => {
    //   console.log(error);
    // });

    this.http.post("https://api.projectoxford.ai/vision/v1.0/tag", {
      url: 'http://www2.pictures.zimbio.com/gi/Andy+Lau+Simple+Life+Portrait+Session+Venice+CszVsXFIHXRl.jpg'
    }, options).map(a => a.json())
    .subscribe(data => {
        console.log(data);
    }, error => {
      console.log(error);
    });

  }
}
