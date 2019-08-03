import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { orderBy } from 'lodash';

import { CLUBS } from '../../../services/data';
import { Club, Player } from '../../../models/models.index';

@Injectable()
export class ClubService {
    constructor() { }

    club$(id: number): Observable<Club> {
        return of(CLUBS.find(c => c.id === id));
    }

    keyPlayers(players: Player[]): Player[] {
        return orderBy(players, p => p.value, "desc").slice(0, 5);
    }
}
