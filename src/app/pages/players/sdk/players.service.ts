import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService, Api } from '../../../common-sdk';

import { Player } from '../../../models';
import { PLAYERS } from '../../../data';

@Injectable()
export class PlayersService {
	constructor(private api: ApiService) { }

	players$(clubid: number): Observable<Api<Player[]>> {
		return this.api.get$<Player[]>('people/1', null, PLAYERS);
	}
}
