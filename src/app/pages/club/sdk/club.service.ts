import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { orderBy } from 'lodash';

import { ApiService, Api } from '../../../common-sdk';

import { Club, Player, Match } from '../../../models';
import { CLUBS } from '../../../data';

@Injectable()
export class ClubService {
    constructor(private api: ApiService) { }

    club$(id: number): Observable<Api<Club>> {
        return this.api.get$<Club>('people/1', null, CLUBS.find(c => c.id === id))
    }

    keyPlayers(players: Player[]): Player[] {
        return orderBy(players, p => p.value, "desc").slice(0, 5);
    }

    fixtures(club: Club): Match[] {
        return [...club.homeMatches, ...club.awayMatches];
    }
}
