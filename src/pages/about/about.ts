import { Component } from '@angular/core';
import { NewsService } from '../../providers/news-service';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { CategoryPage } from '../category/category';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [NewsService]
})
export class AboutPage {
  data: any;

  constructor(private navCtrl: NavController, private newsService: NewsService, private loader: LoadingController,
    private navParams: NavParams) {
    console.log("navParams");

    if (this.navParams && this.navParams) {
      if (typeof this.navParams.data == "string") {
        let source = <string>(this.navParams.data);
        console.log(source);
        this.loadNews(source);
      }
      else {
        this.loadNews("techcrunch");
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
}
