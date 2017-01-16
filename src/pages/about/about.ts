import { Component } from '@angular/core';
import { NewsService } from '../../providers/news-service';
import { NavController, LoadingController, NavParams, Platform } from 'ionic-angular';
import { CategoryPage } from '../category/category';
import { InAppBrowser } from 'ionic-native';
import { Push, PushToken } from '@ionic/cloud-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [NewsService]
})
export class AboutPage {
  data: any;
  defaultUrl: string = "techcrunch";
  registrationInProgress: boolean = false;


  constructor(private navCtrl: NavController, private newsService: NewsService, private loader: LoadingController,
    private navParams: NavParams, private platform: Platform, private push: Push) {

    // if (this.registrationInProgress == false) {
    //   this.push.register().then((t: PushToken) => {
    //     console.log("push token stage");
    //     return this.push.saveToken(t);
    //   }).then((t: PushToken) => {
    //     console.log('Token saved:', t.token);
    //   });

    //   this.push.rx.notification()
    //     .subscribe((msg) => {
    //       alert(msg.title + ': ' + msg.text);
    //     });
    // }

    if (this.navParams && this.navParams) {
      if (typeof this.navParams.data == "string") {
        let source = <string>(this.navParams.data);
        console.log(source);
        this.loadNews(source);
      }
      else {
        this.loadNews(this.defaultUrl);
      }
    }
  }

  getNews(source: string) {
    this.loadNews(source);
  }

  showCategory() {
    this.navCtrl.push(CategoryPage);
  }

  private loadNews(source: string) {
    let loadingUI = this.loader.create({
      content: "Please wait ... your paper will arrive shortly.",
    });

    loadingUI.present();
    this.newsService.getNews(source).then(data => {
      this.data = data;
      loadingUI.dismiss();

    });
  }

  launchNews(url: string) {
    //let options = 'location=no,toolbar=yes,hidden=no';
    //let browser = new InAppBrowser(url, '_blank', options);
    //if (!this.platform.is("mobileweb"))
    //    browser.show();
  }
}
