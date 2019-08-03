import { Club } from './club.model';
import { Match } from './match.model';

export interface League {
    id: number,
    countryId: string,
    name: string,
    round: number,
    season: number,
    tier: number,
    clubs: Club[],
    matches: Match[],
}




