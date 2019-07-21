import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from 'src/app/services/authentication.service';

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
		this.authenticationService.login({ username: 'Gambin17', firstName: 'Gilbert', lastName: 'Gambin' });
		this.router.navigate(['home']);
	}
}
