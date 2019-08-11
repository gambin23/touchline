import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { State, AuthenticationService, LoaderSelector } from '../../common-sdk';
import { Observable } from 'rxjs';


@Component({
	selector: 'navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
	constructor(
		private authenticationService: AuthenticationService,
		private loaderSelector: LoaderSelector
	) { }

	title = 'Touchline';
	showMenu = false;
	loading$: Observable<boolean>;
	ngOnInit() {
		this.loading$ = this.loaderSelector.loading$();
	}

	toggleMenu() {
		this.showMenu = !this.showMenu;
	}

	logout() {
		this.authenticationService.logout();
	}
}
