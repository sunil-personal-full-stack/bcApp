import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BcDetailPage } from './detail/bc-detail';
import { BcPage } from './add/bc';
import { InputpaddingDirective } from '../../app/inputpadding.directive';
import { BidpageTab } from './detail/bid/bidpage';
import { DetailpageTab } from './detail/details/detailpage';
import { MonthpageTab } from './detail/month/monthpage';

@NgModule({
  declarations: [
    BcPage,
    BcDetailPage,
    InputpaddingDirective,
    BidpageTab,
    DetailpageTab,
    MonthpageTab
  ],
  entryComponents: [
    BcPage,
    BcDetailPage,
    BidpageTab,
    DetailpageTab,
    MonthpageTab
  ],
  imports: [
    IonicPageModule.forChild(BcPage),
  ],
})
export class BcPageModule {}
