import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryListPage } from "../category-list/category-list"

@Component({
  selector: 'page-category',
  templateUrl: 'category.html'
})
export class CategoryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  listCategory(category: string) {
    this.navCtrl.push(CategoryListPage, category);
  }
}
