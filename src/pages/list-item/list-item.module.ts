import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListItemPage } from './list-item';

@NgModule({
  declarations: [
    ListItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ListItemPage),
  ],
})
export class ListItemPageModule {}
