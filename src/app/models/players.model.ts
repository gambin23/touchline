export interface Player {
	id: number;
	clubId?: number;
	clubName?: string;
	countryId: number;
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
	seasonGoals: number;
	careerGoals: number;
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
}

export enum PlayerPosition {
	GK = 0,
	LB = 1,
	CD = 2,
	RB = 3,
	LM = 4,
	CM = 5,
	RM = 6,
	LW = 7,
	RW = 8,
	ST = 9
}

export enum PlayingPosition {
	NoPosition = 0,
	Position1 = 1,
	Position2 = 2,
	Position3 = 3,
	Position4 = 4,
	Position5 = 5,
	Position6 = 6,
	Position7 = 7,
	Position8 = 8,
	Position9 = 9,
	Position10 = 10,
	Position11 = 11,
	Position12 = 12,
	Position13 = 13,
	Position14 = 14,
	Position15 = 15,
	Position16 = 16,
	Position17 = 17,
	Position18 = 18
}


