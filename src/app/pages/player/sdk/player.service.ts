import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService, Api } from '../../../common-sdk';

import { Player } from '../../../models/index';
import { PLAYERS } from '../../../data';

@Injectable()
export class PlayerService {
	constructor(private api: ApiService) { }

	player$(id: number): Observable<Api<Player>> {
		return this.api.get$<Player>('people/1', null, PLAYERS.find(p => p.id === id));
	}
}
