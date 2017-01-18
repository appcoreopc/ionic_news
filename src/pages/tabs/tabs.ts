import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';

import { NavController, LoadingController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { Push, PushToken } from '@ionic/cloud-angular';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = ContactPage;
  private registrationInProgress: boolean;

  constructor(private platform: Platform, private push: Push) {

    this.platform.ready().then(source => {
      console.log("platform ready" + source);

      this.push.register().then((t: PushToken) => {
        console.log("push token stage");
        return this.push.saveToken(t);
      }).then((t: PushToken) => {
        console.log('Token saved:', t.token);
      });

      this.push.rx.notification()
        .subscribe((msg) => {
          alert(msg.title + ': ' + msg.text);
          console.log("message arrived!!!!!" + msg);
        });
    });
  }
}
