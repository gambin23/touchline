import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'Touchline';
	showMenu = false;

	toggleMenu() {
		this.showMenu = !this.showMenu;
	}
}
