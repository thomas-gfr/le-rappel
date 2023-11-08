import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReleaseComponent } from './release.component';
import { ReleaseRoutingModule } from './release-routing.module';


@NgModule({
    declarations: [
        ReleaseComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ReleaseRoutingModule,
        SharedModule
    ]
})
export class ReleaseModule { }
