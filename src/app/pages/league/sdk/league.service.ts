import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { orderBy } from 'lodash';

import { ApiService, Api } from '../../../common-sdk';

import { Player, League } from '../../../models/index';
import { LEAGUE } from '../../../data';

@Injectable()
export class LeagueService {
	constructor(private api: ApiService) { }

	league$(id: number): Observable<Api<League>> {
		return this.api.get$<League>('people/1', null, LEAGUE);
	}

	leagueDetails(league: League): League {
		return {
			...league, clubs: orderBy(league.clubs.map(club => ({ ...club, points: club.wins * 3 + club.draws })), [c => c.points, c => c.gf - c.ga])
		};
	}

	topScorers(league: League) {
		let players: Player[] = [];
		league.clubs.map(c => players = [...players, ...c.players]);
		return orderBy(players.filter(p => p.seasonGoals > 0), p => p.seasonGoals).slice(0, 3);
	}

	topAssists(league: League) {
		let players: Player[] = [];
		league.clubs.map(c => players = [...players, ...c.players]);
		return orderBy(players.filter(p => p.seasonAssists > 0), p => p.seasonAssists).slice(0, 3);
	}
}
