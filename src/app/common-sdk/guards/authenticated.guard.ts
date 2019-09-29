import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { Observable, of } from 'rxjs';
import { tap, switchMap, map } from 'rxjs/operators';
import { AuthenticationService } from '../authentication/authentication.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
	constructor(
		private authenticationService: AuthenticationService,
		private router: Router
	) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.authenticationService.isAuthenticated$().pipe(map(isAuthenticated => {
			if (isAuthenticated) {
				return true;
			} else {
				this.router.navigate(['/login']);
				return false;
			}
		}));
	}

}
