import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from '../models/classes/player.model';
import { PLAYERS, PLAYER } from './data';

@Injectable()
export class PlayersService {
	constructor() { }

	players$(clubId: number): Observable<Player[]> {
		return of(PLAYERS);
	}
}
