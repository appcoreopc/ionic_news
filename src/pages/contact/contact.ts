import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { FileTransferService } from '../../providers/FileTransferService'
import { Http, Headers, RequestOptions } from '@angular/http';
import {PayPal, PayPalPayment, PayPalConfiguration} from "ionic-native";
import { Push, PushToken } from '@ionic/cloud-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  service: FileTransferService;

  constructor(public navCtrl: NavController, private http: Http, 
  private platform: Platform, private push: Push) {
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

  private registrationInProgress: boolean;

  register()  { 
    
    this.platform.ready().then(source => {
      console.log("platform ready" + source);
      //if (this.registrationInProgress == false) {
        this.push.register().then((t: PushToken) => {
          console.log("push token stage");
          return this.push.saveToken(t);
        }).then((t: PushToken) => {
          console.log('Token saved:', t.token);
        });

        this.push.rx.notification()
          .subscribe((msg) => {
            alert(msg.title + ': ' + msg.text);
          });
      //}

    });

  }
}
