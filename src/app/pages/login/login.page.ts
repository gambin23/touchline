import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../common-sdk';

@Component({
	selector: 'login-page',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss']
})
export class LoginPage {
	constructor(
		private authenticationService: AuthenticationService,
		private router: Router
	) { }

	login() {
		this.authenticationService.login({ username: 'JohnDoe', name: 'John', surname: 'Doe', clubId: 1 });
		this.router.navigate(['home']);
	}
}
