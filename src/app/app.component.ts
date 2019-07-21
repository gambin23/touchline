import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { AuthenticationService } from './services/authentication.service';
import { User } from './models/authentication.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	constructor(private authenticationService: AuthenticationService) {
		// localStorage.setItem('user', 'test');
	}

	isAuthenticated$: Observable<boolean>;

	ngOnInit() {
		this.isAuthenticated$ = this.authenticationService.isAuthenticated$();
	}
}
