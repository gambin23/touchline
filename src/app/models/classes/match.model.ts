import { Club } from './club.model';
import { League } from './league.model';

export interface Match {
    id: number,
    leagueId: number,
    homeClubId: number,
    awayClubId: number,
    homeScore: number,
    awayScore: number,
    date: Date,
    events: string,
    homeClub: Club,
    awayClub: Club,
    league: League,
}
