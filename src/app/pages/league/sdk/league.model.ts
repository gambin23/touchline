import { Player } from '../../../models/players.model';
import { Color } from '../../../models/color';
import { Tactic } from '../../../models/tactic';

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

export interface Club {
    id: number,
    countryId: string,
    leagueId: number,
    managerId?: number,
    name: string,
    acronym: string,
    color1: Color,
    color2: Color,
    balance: number,
    salaries: number,
    estimatedValue: number,
    stadium: string,
    wins: number,
    draws: number,
    losses: number,
    points?: number,
    gf: number,
    ga: number,
    tactic: Tactic,
    logo: number,
    players: Player[],
    homeMatches: Match[],
    awayMatches: Match[]
}

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
