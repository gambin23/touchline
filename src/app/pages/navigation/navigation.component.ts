import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/common-sdk/authentication/authentication.service';

@Component({
	selector: 'navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
	constructor(private authenticationService: AuthenticationService) { }

	title = 'Touchline';
	showMenu = false;

	toggleMenu() {
		this.showMenu = !this.showMenu;
	}

	logout() {
		this.authenticationService.logout();
	}
}
