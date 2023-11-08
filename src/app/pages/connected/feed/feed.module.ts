import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeedRoutingModule } from './feed-routing.module';
import { FeedComponent } from './feed.component';


@NgModule({
    declarations: [
        FeedComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FeedRoutingModule,
        SharedModule
    ]
})
export class FeedModule { }
