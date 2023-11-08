import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, tap } from 'rxjs';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-disconnected',
    templateUrl: './disconnected.component.html'
})
export class DisconnectedComponent{
    
}
