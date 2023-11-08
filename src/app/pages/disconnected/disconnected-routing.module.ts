import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTE: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        // loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(ROUTE)],
  exports: [RouterModule]
})
export class DisconnectedRoutingModule { }
