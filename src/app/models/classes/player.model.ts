import { PlayerPosition } from '../enums/player-position.enum';
import { PlayingPosition } from '../enums/playing-position.enum';

export interface Player {
	id: number;
	clubId?: number;
	clubName?: string;
	countryId: string;
	name: string;
	surname: string;
	shirtNumber: number;
	dateOfBirth: Date;
	age: [number, number];
	salary: number;
	contractLength: number;
	position: PlayerPosition;
	weight: number;
	height: number;
	injured: boolean;
	retired: boolean;
	avatar: number;
	seasonMatches: number;
	careerMatches: number;
	seasonGoals: number;
	careerGoals: number;
	seasonAssists: number;
	careerAssists: number;
	playingPosition: PlayingPosition;
	fitness: number;
	attacking: number;
	defending: number;
	goalkeeping: number;
	passing: number;
	shooting: number;
	heading: number;
	quickness: number;
	strength: number;
	value: number;
}
