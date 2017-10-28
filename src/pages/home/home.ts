import { LoginPage } from './../login/login';
import { Component, ViewChild } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;
  constructor(public navCtrl: NavController) {

  }
  public openPage(){
    this.navCtrl.push(LoginPage);
  }
}
