import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BcListPage } from '../pages/bc/list/list';
import { BidPage } from '../pages/bid/bid';
import { SummaryPage } from '../pages/summary/summary';

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
    public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'BC List', component:  BcListPage},
      { title: 'Active Bids', component:  BidPage},
      { title: 'Current Month', component:  BcListPage},
      { title: 'Summary', component:  SummaryPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      console.clear();
      console.log('%c ---------------------------------', 'color: #f1c40f;');
      console.log('%c App is Ready!', 'background: #34495e; color: #f1c40f;margin-left:55px; padding:2px 10px;');
      console.log('%c ---------------------------------', 'color: #f1c40f;');
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
