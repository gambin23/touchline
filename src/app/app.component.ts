import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService, AuthenticationService } from './common-sdk';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	constructor(
		private authenticationService: AuthenticationService,
		private userService: UserService
	) {
	}

	isAuthenticated$: Observable<boolean>;

	ngOnInit() {
		this.isAuthenticated$ = this.authenticationService.isAuthenticated$();
		this.userService.setBackground(this.userService.getBackground());
	}
}
