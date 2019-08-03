import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';

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
		this.authenticationService.login({ username: 'Gambin17', name: 'Gilbert', surname: 'Gambin', clubId: 1 });
		this.router.navigate(['home']);
	}
}
