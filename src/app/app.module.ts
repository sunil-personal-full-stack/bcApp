import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SecureStorage } from '@ionic-native/secure-storage';

import { MyApp } from './app.component';
import { LoginPage } from './../pages/login/login';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//
import { BcPageModule } from '../pages/bc/bc.module';
import { BcListPage } from '../pages/bc/list/list';
//
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    BcListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BcPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    BcListPage
  ],
  providers: [
    StatusBar,
    SecureStorage,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
