import { Color } from '../enums/color.enum';
import { Tactic } from '../enums/tactic.enum';
import { Player } from './player.model';
import { Match } from './match.model';
import { Manager } from './manager.model';
import { League } from './league.model';

export interface Club {
	id: number;
	countryId: string;
	leagueId: number;
	managerId?: number;
	name: string;
	acronym: string;
	color1: Color;
	color2: Color;
	balance: number;
	salaries: number;
	estimatedValue: number;
	stadium: string;
	wins: number;
	draws: number;
	losses: number;
	points?: number;
	gf: number;
	ga: number;
	tactic: Tactic;
	logo: number;
	manager: Manager;
	league: League;
	players: Player[];
	homeMatches: Match[];
	awayMatches: Match[];
}
