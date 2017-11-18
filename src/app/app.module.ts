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
import { RegisterComponent } from '../pages/register/register';
import { BidPage } from '../pages/bid/bid';
import { BidPageModule } from '../pages/bid/bid.module';
import { SummaryPageModule } from '../pages/summary/summary.module';
//
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    BcListPage,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BcPageModule,
    BidPageModule,
    SummaryPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    BcListPage,
    RegisterComponent
  ],
  providers: [
    StatusBar,
    SecureStorage,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
