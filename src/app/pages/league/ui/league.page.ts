import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LeagueService } from '../sdk/league.service';
import { Player, League } from '../../../models/index';

@Component({
	selector: 'league-page',
	templateUrl: './league.page.html',
	styleUrls: ['./league.page.scss']
})
export class LeaguePage implements OnInit, OnDestroy {

	constructor(private leagueService: LeagueService) { }

	subscription = new Subscription();
	league: League;
	topScorers: Player[] = [];
	topAssists: Player[] = [];

	ngOnInit() {
		this.subscription.add(this.leagueService.league$(1).subscribe(response => {
			if (response.data) {
				this.league = this.leagueService.leagueDetails(response.data);
				this.topScorers = this.leagueService.topScorers(this.league);
				this.topAssists = this.leagueService.topAssists(this.league);
			}
		}));
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
