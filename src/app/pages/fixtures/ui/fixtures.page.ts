import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

import { Api } from '../../../common-sdk';

import { FixturesService } from '../sdk/fixtures.service';
import { AuthenticationService } from '../../../common-sdk/authentication/authentication.service';
import { FixturesViewModel } from '../sdk/fixtures.model';

@Component({
	selector: 'fixtures-page',
	templateUrl: './fixtures.page.html',
	styleUrls: ['./fixtures.page.scss']
})
export class FixturesPage implements OnInit, OnDestroy {

	constructor(
		private fixturesService: FixturesService,
		private authenticationService: AuthenticationService,
		private route: ActivatedRoute
	) { }

	subscription = new Subscription();
	fixtures$: Observable<Api<FixturesViewModel>>;

	ngOnInit() {
		this.subscription.add(this.route.params.subscribe(params => {
			if (params.id) {
				this.fixtures$ = this.fixturesService.fixtures$(Number(params.id));
			} else {
				this.subscription.add(this.authenticationService.user$().subscribe(user => {
					this.fixtures$ = this.fixturesService.fixtures$(user.clubId);
				}));
			}
		}));
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
