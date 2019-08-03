import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { orderBy } from 'lodash';

import { LEAGUE } from '../../../services/data';
import { Player, League } from '../../../models/models.index';

@Injectable()
export class LeagueService {
    constructor() { }

    league$(id: number): Observable<League> {
        LEAGUE.clubs = orderBy(LEAGUE.clubs.map(club => {
            club.points = club.wins * 3 + club.draws
            return club;
        }), [c => c.points, c => c.gf - c.ga]);
        return of(LEAGUE);
    }

    topScorers(league: League) {
        let players: Player[] = [];
        league.clubs.map(c => players = [...players, ...c.players]);
        return orderBy(players.filter(p => p.seasonGoals > 0), p => p.seasonGoals).slice(0, 3);
    }

    topAssists(league: League) {
        let players: Player[] = [];
        league.clubs.map(c => players = [...players, ...c.players]);
        return orderBy(players.filter(p => p.seasonAssists > 0), p => p.seasonAssists).slice(0, 3);
    }
}
