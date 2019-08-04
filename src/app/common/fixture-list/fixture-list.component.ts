import { Component, Input, } from '@angular/core';
import * as moment from 'moment';

import { Match } from '../../models';
import { MatchStatus } from './fixture-list.model';

@Component({
	selector: 'fixture-list',
	templateUrl: './fixture-list.component.html',
	styleUrls: ['./fixture-list.component.scss']
})
export class FixtureListComponent {

	@Input() matches: Match[];
	@Input() showDate = false;

	favourites: Match[] = [];

	toggleFavourite(match: Match) {
		this.favourites = this.isFavourite(match) ? this.favourites.filter(m => m.id !== match.id) : [...this.favourites, match];
		console.log(`Updated match id: ${match.id} in favourites`);
	}

	isFavourite(match: Match): boolean {
		return this.favourites.some(m => m.id === match.id);
	}

	matchStatus(match: Match): MatchStatus {
		return matchStatus(match);
	}
}

export function matchStatus(match: Match): MatchStatus {
	const currentDate = moment();
	const kickOffDate = moment(match.date);
	const endDate = moment(match.date).add(90, 'm');

	if (currentDate >= kickOffDate && currentDate <= endDate)
		return 'inProgress';
	if (currentDate < kickOffDate)
		return 'notPlayed';
	if (currentDate > endDate)
		return 'played';
}
