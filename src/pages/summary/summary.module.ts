import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SummaryPage } from './summary';

@NgModule({
  declarations: [
    SummaryPage,
  ],
  entryComponents: [
    SummaryPage
  ],
  imports: [
    IonicPageModule.forChild(SummaryPage),
  ],
})
export class SummaryPageModule {}
