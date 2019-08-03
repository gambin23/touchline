import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../models/models.index';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
	selector: 'settings-page',
	templateUrl: './settings.page.html',
	styleUrls: ['./settings.page.scss']
})
export class SettingsPage implements OnInit {
	constructor(
		private authenticationService: AuthenticationService,
		private route: ActivatedRoute
	) { }

	user$: Observable<User>;
	fragment: Observable<string> = of('account');

	ngOnInit() {
		this.fragment = this.route.fragment.pipe(map(fragment => fragment ? fragment : 'account'));
		this.user$ = this.authenticationService.user$();
	}


}
