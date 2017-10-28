import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    private secureStorage: SecureStorage) {

  }
  public gotoHome(){
    this.secureStorage.create('demo')
    .then((storage: SecureStorageObject) => {
      storage.set('ud','data')
        .then(
        (data) => {
          this.navCtrl.setRoot(HomePage)
        },
        error => console.log(error)
        );
    })
  }
}