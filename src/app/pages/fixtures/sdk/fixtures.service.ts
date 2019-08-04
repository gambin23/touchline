import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { CLUBS } from '../../../data';
import { FixturesViewModel } from './fixtures.model';
import { matchStatus } from '../../../common';

@Injectable()
export class FixturesService {
    constructor() { }

    fixtures$(id: number): Observable<FixturesViewModel> {
        const club = CLUBS.find(c => c.id === id);
        const matches = [...club.homeMatches, ...club.awayMatches]
        return of({
            club: club,
            inProgress: matches.find(m => matchStatus(m) === 'inProgress'),
            futureMatches: matches.filter(m => matchStatus(m) === 'notPlayed'),
            playedMatches: matches.filter(m => matchStatus(m) === 'played')
        });
    }


}
