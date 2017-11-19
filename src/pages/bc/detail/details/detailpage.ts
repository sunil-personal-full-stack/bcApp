import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'detail-page-tab',
  templateUrl: 'detailpage.html',
})
export class DetailpageTab {
  public memberList = [
    {id: 1, name: 'Deep Patel', contact : '8140150160'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BcPage');
  }
}