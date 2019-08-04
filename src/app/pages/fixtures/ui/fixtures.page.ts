import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';

import { FixturesService } from '../sdk/fixtures.service';
import { Player, Match, Club } from '../../../models/index';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
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
	fixtures$: Observable<FixturesViewModel>;

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
