import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BcPage } from './bc';

@NgModule({
  declarations: [
    BcPage,
  ],
  imports: [
    IonicPageModule.forChild(BcPage),
  ],
})
export class BcPageModule {}
