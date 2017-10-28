import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SecureStorage, SecureStorageObject } from '@ionic-native/secure-storage';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{ title: string, component: any }>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private secureStorage: SecureStorage) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'BC List', component: LoginPage },
      { title: 'Add BC', component: HomePage },
      { title: 'Active Bids', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.secureStorage.create('demo')
        .then((storage: SecureStorageObject) => {
          storage.get('ud')
            .then(
            data => console.log(data),
            (error) => {
              console.log(error);
              this.nav.setRoot(LoginPage);
            });
        })
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
