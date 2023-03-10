import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'leave-request',
    pathMatch: 'full',
  },
  {
    path: 'leave-request',
    loadChildren: () =>
      import('./pages/leave-request/leave-request.module').then(
        (m) => m.LeaveRequestPageModule
      ),
  },
  {
    path: 'view-leaves',
    loadChildren: () => import('./pages/view-leaves/view-leaves.module').then( m => m.ViewLeavesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
