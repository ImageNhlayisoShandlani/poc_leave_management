import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewLeavesPage } from './view-leaves.page';

const routes: Routes = [
  {
    path: '',
    component: ViewLeavesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewLeavesPageRoutingModule {}
