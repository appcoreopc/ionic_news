import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { CategoryService } from '../../providers/category-service';

@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html', 
  providers: [CategoryService]
})


export class CategoryListPage {

  data : any; 

  constructor(public navCtrl: NavController, private categoryService: CategoryService, public navParams: NavParams, 
  private loader: LoadingController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryListPage');
    this.loadCategory();
  }

  private loadCategory() {
    this.navParams.data;
    let source = <string> this.navParams.data;
    
    let loadingUI = this.loader.create({
      content: "Please wait ... your paper will arrive shortly.",
    });

    loadingUI.present();
    this.categoryService.getSourceList(source).then(data => {
      this.data = data;
      loadingUI.dismiss();
    });

  }


}
