import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../models/authentication.model';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
	selector: 'home-page',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {
	constructor(private authenticationService: AuthenticationService) { }

	user$: Observable<User>;

	ngOnInit() {
		this.user$ = this.authenticationService.getUser$();
	}
}
