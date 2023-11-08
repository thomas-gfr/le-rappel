import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AuthGuard } from 'src/app/library/src/guards/auth.guard';
import { ConnectedComponent } from './connected.component';

const ROUTE: Routes = [
  {
    path: '',
    component: ConnectedComponent,
    // canActivate: [AuthGuard],
    children: [
      // {
      //   path: '',
      //   loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      // },
      // {
      //   path: 'sessions',
      //   data: {
      //     breadcrumb: 'Sessions',
      //   },
      //   loadChildren: () => import('./sessions/sessions.module').then(m => m.SessionModule)
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTE)],
  exports: [RouterModule]
})
export class ConnectedRoutingModule { }
