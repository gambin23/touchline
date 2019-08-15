import { Club, Color, Tactic, PlayerPosition, PlayingPosition, Player, Match } from '../models/index';

const PLAYER: Player = {
	id: 1,
	clubId: 1001,
	clubName: 'Boston City FC',
	countryId: 'mt',
	name: 'Massimo',
	surname: 'Truzzi',
	shirtNumber: 10,
	dateOfBirth: new Date(),
	age: [21, 88],
	salary: 250000,
	contractLength: 3,
	position: PlayerPosition.CM,
	weight: 88,
	height: 185,
	injured: false,
	retired: false,
	avatar: 2,
	seasonMatches: 11,
	careerMatches: 191,
	seasonGoals: 3,
	careerGoals: 16,
	seasonAssists: 2,
	careerAssists: 16,
	playingPosition: PlayingPosition.Position6,
	fitness: 75,
	attacking: 12,
	defending: 8,
	goalkeeping: 3,
	passing: 8,
	shooting: 3,
	heading: 3,
	quickness: 7,
	strength: 7,
	value: 500000
};

const MATCH: Match = {
	id: 1,
	homeClubId: 1,
	awayClubId: 2,
	leagueId: 1,
	homeClub: {
		id: 1,
		countryId: 'mt',
		leagueId: 1,
		name: 'Boston City FC',
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
		countryId: 'mt',
		leagueId: 1,
		name: 'AS Vesuvio',
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
	events: '',
	league: {
		id: 1,
		countryId: 'mt',
		name: 'English Premier League',
		season: 1,
		round: 5,
		tier: 2,
		clubs: [],
		matches: []
	}
};

export const CLUB: Club = {
	id: 1,
	countryId: 'mt',
	leagueId: 1,
	name: 'Boston City FC',
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
	players: [
		{ ...PLAYER, id: 1, name: 'Mark', surname: 'Saliba', shirtNumber: 1, position: PlayerPosition.GK, playingPosition: PlayingPosition.Position1, value: 500000 },
		{ ...PLAYER, id: 2, name: 'Angelo', surname: 'Borg', shirtNumber: 2, position: PlayerPosition.LB, playingPosition: PlayingPosition.Position2, value: 1000000 },
		{ ...PLAYER, id: 3, name: 'Luke', surname: 'Galea', shirtNumber: 3, position: PlayerPosition.CD, playingPosition: PlayingPosition.Position3, value: 1000000 },
		{ ...PLAYER, id: 4, name: 'Ralph', surname: 'Gaetano ', shirtNumber: 4, position: PlayerPosition.CD, playingPosition: PlayingPosition.Position4, value: 700000 },
		{ ...PLAYER, id: 5, name: 'John', surname: 'Fenech', shirtNumber: 5, position: PlayerPosition.RB, playingPosition: PlayingPosition.Position5, value: 800000 }
	],
	homeMatches: [MATCH],
	awayMatches: [{ ...MATCH, ...{ id: 2, homeClub: MATCH.awayClub, awayClub: MATCH.homeClub } }],
	manager: {
		name: 'Gilbert',
		surname: 'Gambin',
		username: 'Gambin17',
		clubId: 1
	},
	league: {
		id: 1,
		countryId: 'mt',
		name: 'English Premier League',
		season: 1,
		round: 5,
		tier: 2,
		clubs: [],
		matches: []
	}
};

export const CLUBS: Club[] = [
	CLUB, CLUB, CLUB, CLUB, CLUB, CLUB, CLUB, CLUB,
	{
		...CLUB, ...{
			id: 2,
			logo: 2,
			name: 'AS Vesuvio',
			manager: {
				username: 'Derek1',
				name: 'Derek',
				surname: 'Micallef',
				clubId: 2
			}
		}
	}, {
		...CLUB, ...{
			id: 3,
			logo: 1,
			name: 'Dingli Swallows',
			manager: {
				username: 'ChrisS',
				name: 'Chris',
				surname: 'Said',
				clubId: 3
			}
		}
	},
	{
		...CLUB, ...{
			id: 1001,
			logo: 3,
			name: 'Lozano FC',
			manager: {
				username: 'ChrisS',
				name: 'Chris',
				surname: 'Said',
				clubId: 3
			}
		}
	}];



