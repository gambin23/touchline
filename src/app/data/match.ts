import { Match, Tactic, Color } from '../models/index';
import { LEAGUE } from './league';

export const MATCH: Match = {
    id: 1,
    homeClubId: 1,
    awayClubId: 2,
    leagueId: 1,
    homeClub: {
        id: 1,
        countryId: "mt",
        leagueId: 1,
        name: "Boston City FC",
        acronym: 'BCFC',
        stadium: 'Boston Stadium',
        color1: Color.Teal,
        color2: Color.White,
        balance: 5000000,
        salaries: 2500000,
        estimatedValue: 15000000,
        wins: 9,
        draws: 3,
        losses: 4,
        gf: 50,
        ga: 11,
        tactic: Tactic.FourFourTwo,
        logo: 5,
        players: [],
        homeMatches: [],
        awayMatches: [],
        manager: {
            name: 'Gilbert',
            surname: 'Gambin',
            username: 'Gambin17',
            clubId: 1
        },
        league: null
    },
    awayClub: {
        id: 2,
        countryId: "mt",
        leagueId: 1,
        name: "AS Vesuvio",
        acronym: 'BCFC',
        stadium: 'Boston Stadium',
        color1: Color.Teal,
        color2: Color.White,
        balance: 5000000,
        salaries: 2500000,
        estimatedValue: 15000000,
        wins: 9,
        draws: 3,
        losses: 4,
        gf: 50,
        ga: 11,
        tactic: Tactic.FourFourTwo,
        logo: 5,
        players: [],
        homeMatches: [],
        awayMatches: [],
        manager: {
            name: 'Gilbert',
            surname: 'Gambin',
            username: 'Gambin17',
            clubId: 1
        },
        league: null
    },
    homeScore: 2,
    awayScore: 1,
    date: new Date(),
    events: "",
    league: LEAGUE
}




