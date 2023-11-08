import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ArtisteRoutingModule } from './artiste-routing.module';
import { ArtisteComponent } from './artiste.component';


@NgModule({
    declarations: [
        ArtisteComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ArtisteRoutingModule,
        SharedModule
    ]
})
export class ArtisteModule { }
