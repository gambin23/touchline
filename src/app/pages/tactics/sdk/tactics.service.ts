import { Injectable } from '@angular/core';
import { orderBy } from 'lodash';

import { Player, PlayingPosition } from '../../../models/index';

@Injectable()
export class TacticsService {
	constructor() { }

	orderPlayers(players: Player[]): Player[] {
		const starting11 = orderBy(players
			.filter(p => p.playingPosition >= PlayingPosition.Position1 && p.playingPosition <= PlayingPosition.Position11),
			p => p.playingPosition);
		const subs = orderBy(players.filter(p => p.playingPosition > PlayingPosition.Position11), p => p.playingPosition);
		const others = players.filter(p => p.playingPosition === PlayingPosition.NoPosition);
		return [...starting11, ...subs, ...others];
	}
}
