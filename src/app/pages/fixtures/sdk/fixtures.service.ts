import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService, Api } from '../../../common-sdk';
import { matchStatus } from '../../../common-ui';

import { CLUBS } from '../../../data';
import { FixturesViewModel } from './fixtures.model';

@Injectable()
export class FixturesService {
    constructor(private api: ApiService) { }

    fixtures$(id: number): Observable<Api<FixturesViewModel>> {
        const club = CLUBS.find(c => c.id === id);
        const matches = [...club.homeMatches, ...club.awayMatches]
        return this.api.get$<FixturesViewModel>('people/1', null, {
            club: club,
            inProgress: matches.find(m => matchStatus(m) === 'inProgress'),
            futureMatches: matches.filter(m => matchStatus(m) === 'notPlayed'),
            playedMatches: matches.filter(m => matchStatus(m) === 'played')
        });
    }
}
