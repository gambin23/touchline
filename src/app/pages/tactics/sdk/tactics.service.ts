import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { orderBy } from 'lodash';

import { ApiService, Api } from '../../../common-sdk';

import { Player, PlayingPosition } from '../../../models';
import { PLAYERS } from '../../../data';

@Injectable()
export class TacticsService {
	constructor(private api: ApiService) { }

	tactics$(): Observable<Api<Player[]>> {
		return this.api.get$<Player[]>('people/1', null, PLAYERS).pipe(map(response => {
			return response.data ? { ...response, data: this.orderPlayers(response.data) } : response;
		}));
	}

	save() {
		console.log('saving players');
	}

	orderPlayers(players: Player[]): Player[] {
		const starting11 = orderBy(players
			.filter(p => p.playingPosition >= PlayingPosition.Position1 && p.playingPosition <= PlayingPosition.Position11),
			p => p.playingPosition);
		const subs = orderBy(players.filter(p => p.playingPosition > PlayingPosition.Position11), p => p.playingPosition);
		const others = players.filter(p => p.playingPosition === PlayingPosition.NoPosition);
		return [...starting11, ...subs, ...others];
	}


}
