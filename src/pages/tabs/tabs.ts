import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { NavController, LoadingController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { Push, PushToken, Deploy } from '@ionic/cloud-angular';
import { ApplicationUpdateService } from '../../providers/applicationUpdateService';
import { NotificationService } from '../../providers/notificationService';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  
  private registrationInProgress: boolean;

  constructor(private platform: Platform, private push: Push,
    private deploy: Deploy) {

    // Register Push notification service
    new NotificationService(this.platform, this.push).registerPushNotification();
    // Application Update
    new ApplicationUpdateService(deploy).appUpdate();
  }
}
