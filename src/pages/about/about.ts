import { Component } from '@angular/core';
import { NewsService } from '../../providers/news-service';
import { NavController, LoadingController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers : [NewsService]
})
export class AboutPage {

data : any; 

  constructor(public navCtrl: NavController, public newsService: NewsService, public loader : LoadingController) {
    let loading = loader.create({
      content : "Please wait",
    });

    loading.present();
    this.newsService.getNews("https://randomuser.me/api/?results=10").then(data => 
    this.data = data);
    loading.dismiss();
    }
}
