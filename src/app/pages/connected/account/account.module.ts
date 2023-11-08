import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';


@NgModule({
    declarations: [
        AccountComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        SharedModule
    ]
})
export class ReleaseModule { }
