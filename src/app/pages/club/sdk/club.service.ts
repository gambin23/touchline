import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { orderBy } from 'lodash';

import { Club, Player, Match } from '../../../models';
import { CLUBS } from '../../../data';

@Injectable()
export class ClubService {
    constructor() { }

    club$(id: number): Observable<Club> {
        return of(CLUBS.find(c => c.id === id));
    }

    keyPlayers(players: Player[]): Player[] {
        return orderBy(players, p => p.value, "desc").slice(0, 5);
    }

    fixtures(club: Club): Match[] {
        return [...club.homeMatches, ...club.awayMatches];
    }
}
