import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from '../models/players.model';
import { PLAYERS, PLAYER } from './data';

@Injectable()
export class PlayersService {
	constructor() { }

	players$(clubId: number): Observable<Player[]> {
		return of(PLAYERS);
	}

	player$(id: number): Observable<Player> {
		var player = PLAYERS.find(p => p.id === id);
		return of(player);
	}

}
