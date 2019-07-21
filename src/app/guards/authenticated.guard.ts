import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
	constructor(
		private authenticationService: AuthenticationService,
		private router: Router
	) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
		return this.authenticationService.isAuthenticated$().pipe(tap(isAuthenticated => {
			if (isAuthenticated) {
				return true;
			} else {
				this.router.navigate(['/login']);
				return false;
			}
		}));
	}

}
