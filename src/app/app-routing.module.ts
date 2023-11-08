import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const ROUTE: Routes = [
    {
        path: 'connexion',
        // component: SigninComponent,
    },
    {
        path: '',
        loadChildren: () => import('./pages/connected/connected.module').then(m => m.ConnectedModule)
    },
    {
        path: '**',
        redirectTo: '',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTE)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
