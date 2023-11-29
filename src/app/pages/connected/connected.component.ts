import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, filter, tap } from 'rxjs';
// import { User } from 'src/app/library/src/interfaces/user/user.model';
// import { AuthService } from 'src/app/shared/services/auth/auth.service';
// import { LoggedUserService } from 'src/app/library/src/services/auth/logged-user.service';
import { NavigationEnd, Router } from '@angular/router';

@Component({
    selector: 'app-connected',
    templateUrl: './connected.component.html'
})
export class ConnectedComponent implements OnInit, OnDestroy {
    // public user$: Observable<User | null> = this._loggedUserService.user$.asObservable();
    // public navItems: Nav = this._getNav();
    // private _time: NodeJS.Timeout;
    // private _interval: NodeJS.Timeout;
    private _routeSub: Subscription;
    sidebarVisible: boolean = false;
    constructor(
        // private readonly _authService: AuthService,
        // private readonly _loggedUserService: LoggedUserService,
        // private readonly _toastService: ToastService,
        private readonly _router: Router,
    ) {}

    @HostListener('document:mousemove')
    @HostListener('document:keypress')
    @HostListener('document:click')
    @HostListener('document:wheel')
    private _resetTimer(): void {
        // clearTimeout(this._time);

        // this._time = setTimeout(() => {
        //     this._authService.logout();
        // }, 1000 * 60 * 30);
    }

    @HostListener('window:beforeunload')
    private _unloadHandler(): void {
        // this._authService.setCurrentPath();
    }

    @HostListener('window:popstate')
    private _onPopState(): void {
        location.reload();
    }

    public ngOnInit(): void {
        // this._interval = setInterval(() => {
            // this._authService.setCurrentPath();
            // this._authService.fetchCurrentUser().subscribe();
        // }, 1000 * 60 * 25);

        // this._toastService.resetStack();

        this._routeSub = this._router.events
            .pipe(
                filter((event) => event instanceof NavigationEnd),
                tap((event: NavigationEnd) => {
                    const root = event.urlAfterRedirects.split('/')[1];

                    for (let i = 0; i < sessionStorage.length; i++) {
                        const key = sessionStorage.key(i);
                        if (key && !key.startsWith(`_${root}`)) {
                            sessionStorage.removeItem(key);
                            i--;
                        }
                    }
                })
            )
            .subscribe();
    }

    public ngOnDestroy(): void {
        // clearTimeout(this._time);
        // clearInterval(this._interval);
        if (this._routeSub) this._routeSub.unsubscribe();
    }

    // private _getNav(): Nav {
    //     return {
    //         logoHome: true,
    //         search: true,
    //         primaryNavItems: [
    //             {
    //                 tooltipBreak: 'break_l',
    //                 navItems: [
    //                     {
    //                         label: 'Plannings',
    //                         icon: 'icon-planning',
    //                         link: '/plannings',
    //                         permission: true
    //                     },
    //                     {
    //                         label: 'Sessions',
    //                         icon: 'icon-session',
    //                         link: '/sessions',
    //                         permission: true
    //                     },
    //                     {
    //                         label: 'Organisations',
    //                         icon: 'icon-organization',
    //                         link: '/organisations',
    //                         permission: true
    //                     },
    //                     {
    //                         label: 'Apprenants',
    //                         icon: 'icon-learner',
    //                         link: '/apprenants',
    //                         permission: this._permissionsService.permissions.isLearnerCRM
    //                     },
    //                     {
    //                         label: 'Dossiers',
    //                         icon: 'icon-folder',
    //                         link: '/dossiers',
    //                         permission: true
    //                     }
    //                 ]
    //             }
    //         ],
    //         secondaryNavItems: [
    //             {
    //                 tooltipBreak: 'break_xl',
    //                 navItems: [
    //                     {
    //                         label: 'Catalogue',
    //                         icon: 'icon-catalog',
    //                         link: '/catalogue',
    //                         permission: true,
    //                         roles: ['ROLE_CATALOG']
    //                     },
    //                     {
    //                         label: 'Ressources',
    //                         icon: 'icon-resource',
    //                         link: '/ressources',
    //                         permission: true,
    //                         roles: ['ROLE_RESOURCE']
    //                     },
    //                     {
    //                         label: 'Archives',
    //                         icon: 'icon-archive',
    //                         link: '/archives',
    //                         permission: true
    //                     }
    //                 ]
    //             },
    //             {
    //                 tooltipBreak: 'break_xl',
    //                 navItems: [
    //                     {
    //                         label: 'Finance',
    //                         icon: 'icon-finance',
    //                         link: '/finance',
    //                         permission: true,
    //                         roles: ['ROLE_FINANCE']
    //                     },
    //                     {
    //                         label: 'Pilotage',
    //                         icon: 'icon-steering',
    //                         link: '/pilotage',
    //                         permission: this._permissionsService.permissions.isManagementSteering,
    //                         roles: ['ROLE_STEERING']
    //                     }
    //                 ]
    //             },
    //             {
    //                 notification: true,
    //                 tooltipBreak: 'break_xl',
    //                 navItems: [
    //                     {
    //                         label: 'Configuration',
    //                         icon: 'icon-configuration',
    //                         link: '/configuration',
    //                         permission: true,
    //                         roles: ['ROLE_ADMIN', 'ROLE_CATALOG_CONFIGURATION', 'ROLE_FINANCE_CONFIGURATION']
    //                     },
    //                     {
    //                         label: 'Mon compte',
    //                         icon: 'icon-account',
    //                         link: '/mon-compte',
    //                         permission: true
    //                     }
    //                 ]
    //             }
    //         ]
    //     };
    // }
}
