import { Component } from '@angular/core';

@Component({
	selector: 'navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
	title = 'Touchline';
	showMenu = false;

	toggleMenu() {
		this.showMenu = !this.showMenu;
	}
}
