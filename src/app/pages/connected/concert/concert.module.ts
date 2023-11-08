import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConcertComponent } from './concert.component';
import { ConcertRoutingModule } from './concert-routing.module';


@NgModule({
    declarations: [
        ConcertComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ConcertRoutingModule,
        SharedModule
    ]
})
export class ConcertModule { }
