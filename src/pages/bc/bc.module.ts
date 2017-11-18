import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BcPage } from './bc';
import { BcDetailPage } from './detail/bc-detail';

@NgModule({
  declarations: [
    BcPage,
    BcDetailPage
  ],
  entryComponents: [
    BcPage,
    BcDetailPage
  ],
  imports: [
    IonicPageModule.forChild(BcPage),
  ],
})
export class BcPageModule {}
