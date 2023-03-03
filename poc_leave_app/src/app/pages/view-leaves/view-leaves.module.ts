import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewLeavesPageRoutingModule } from './view-leaves-routing.module';

import { ViewLeavesPage } from './view-leaves.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewLeavesPageRoutingModule
  ],
  declarations: [ViewLeavesPage]
})
export class ViewLeavesPageModule {}
