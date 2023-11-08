import { CommonModule, CurrencyPipe, DatePipe, registerLocaleData } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeFr from '@angular/common/locales/fr';
import { TooltipModule } from 'primeng/tooltip';

registerLocaleData(localeFr);

const COMPONENTS = [
];

const PIPES = [
];

const DIRECTIVES = [
];

const PRIMENG = [
    TooltipModule,
];

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        ...PRIMENG,
    ],
    providers: [
        ...PIPES,
        DatePipe,
    ],
    declarations: [...COMPONENTS, ...PIPES, ...DIRECTIVES],
    exports: [...COMPONENTS, ...PIPES, ...DIRECTIVES, ...PRIMENG ]
})
export class SharedModule {}
