import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisconnectedRoutingModule } from './disconnected-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisconnectedComponent } from './disconnected.component';


@NgModule({
    declarations: [
        DisconnectedComponent,
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        DisconnectedRoutingModule,
        SharedModule
    ]
})
export class DisconnectedModule { }
