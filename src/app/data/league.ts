import { League } from '../models/index';
import { CLUBS } from './club';

export const LEAGUE: League = {
    id: 1,
    countryId: "mt",
    name: "English Premier League",
    season: 1,
    round: 5,
    tier: 2,
    clubs: CLUBS,
    matches: []
}
