import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DetailpageTab } from './details/detailpage';
import { MonthpageTab } from './month/monthpage';
import { BidpageTab } from './bid/bidpage';

@Component({
  selector: 'page-bc-detail',
  templateUrl: 'bc-detail.html',
})
export class BcDetailPage {
  public tab1;
  public tab2;
  public tab3;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tab1 = DetailpageTab;
    this.tab2 = MonthpageTab;
    this.tab3 = BidpageTab;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BcPage');
  }
}