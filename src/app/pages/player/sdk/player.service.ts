import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Player } from '../../../models/classes/player.model';
import { PLAYERS } from '../../../services/data';

@Injectable()
export class PlayerService {
	constructor() { }

	player$(id: number): Observable<Player> {
		var player = PLAYERS.find(p => p.id === id);
		return of(player);
	}
}
