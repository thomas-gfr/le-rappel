import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectedRoutingModule } from './connected-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ConnectedComponent } from './connected.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        ConnectedComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ConnectedRoutingModule,
        SharedModule
    ]
})
export class ConnectedModule { }
