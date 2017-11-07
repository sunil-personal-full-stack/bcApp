import { BcListPage } from '../bc/list/list';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController) {

  }
  public gotoHome(){
    this.navCtrl.setRoot(BcListPage)
  }
}