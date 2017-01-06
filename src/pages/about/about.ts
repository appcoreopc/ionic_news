import { Component } from '@angular/core';
import { NewsService } from '../../providers/news-service';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [NewsService]
})
export class AboutPage {
  data: any;

  constructor(public navCtrl: NavController, public newsService: NewsService, public loader: LoadingController) {
    this.loadNews("techcrunch");
  }

  getNews(source: string) {
    this.loadNews(source);
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
}
