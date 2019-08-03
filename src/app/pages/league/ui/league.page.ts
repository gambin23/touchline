import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { LeagueService } from '../sdk/league.service';
import { Player, League } from '../../../models/models.index';

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
		this.subscription.add(this.leagueService.league$(1).subscribe(league => {
			this.league = league;
			this.topScorers = this.leagueService.topScorers(league);
			this.topAssists = this.leagueService.topAssists(league);
		}));
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

}
