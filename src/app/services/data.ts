import { PlayerPosition, PlayingPosition, Player } from '../models/players.model';


export const PLAYER: Player = {
	id: 1,
	clubId: 1001,
	clubName: 'Boston City FC',
	countryId: 1,
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
	seasonGoals: 3,
	careerGoals: 16,
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

export const PLAYERS: Player[] = [
	{ ...PLAYER, id: 1, name: 'Mark', surname: 'Saliba', shirtNumber: 1, position: PlayerPosition.GK, playingPosition: PlayingPosition.Position1, value: 500000 },
	{ ...PLAYER, id: 2, name: 'Angelo', surname: 'Borg', shirtNumber: 2, position: PlayerPosition.LB, playingPosition: PlayingPosition.Position2, value: 1000000 },
	{ ...PLAYER, id: 3, name: 'Luke', surname: 'Galea', shirtNumber: 3, position: PlayerPosition.CD, playingPosition: PlayingPosition.Position3, value: 1000000 },
	{ ...PLAYER, id: 4, name: 'Ralph', surname: 'Gaetano ', shirtNumber: 4, position: PlayerPosition.CD, playingPosition: PlayingPosition.Position4, value: 700000 },
	{ ...PLAYER, id: 5, name: 'John', surname: 'Fenech', shirtNumber: 5, position: PlayerPosition.RB, playingPosition: PlayingPosition.Position5, value: 800000 },
	{ ...PLAYER, id: 6, name: 'Mark', surname: 'Gabbia', shirtNumber: 6, position: PlayerPosition.LM, playingPosition: PlayingPosition.Position6, value: 200000 },
	{ ...PLAYER, id: 7, name: 'Chris', surname: 'Rumma', shirtNumber: 7, position: PlayerPosition.CM, playingPosition: PlayingPosition.Position7, value: 300000 },
	{ ...PLAYER, id: 8, name: 'Gilbert', surname: 'Gambin', shirtNumber: 8, position: PlayerPosition.CM, playingPosition: PlayingPosition.Position8, value: 600000 },
	{ ...PLAYER, id: 9, name: 'Andrew', surname: 'Bilic', shirtNumber: 9, position: PlayerPosition.RM, playingPosition: PlayingPosition.Position9, value: 900000 },
	{ ...PLAYER, id: 10, name: 'Mario', surname: 'Galesionis', shirtNumber: 10, position: PlayerPosition.ST, playingPosition: PlayingPosition.Position10, value: 1200000 },
	{ ...PLAYER, id: 11, name: 'Jonathan', surname: 'Pirlo', shirtNumber: 11, position: PlayerPosition.ST, playingPosition: PlayingPosition.Position11, value: 1500000 },
	{ ...PLAYER, id: 12, name: 'Shaun', surname: 'Scicluna', shirtNumber: 12, position: PlayerPosition.LB, playingPosition: PlayingPosition.Position12, value: 200000 },
	{ ...PLAYER, id: 13, name: 'Mark', surname: 'Attard', shirtNumber: 13, position: PlayerPosition.RB, playingPosition: PlayingPosition.Position13, value: 100000 },
	{ ...PLAYER, id: 14, name: 'Sean', surname: 'Camilleri', shirtNumber: 14, position: PlayerPosition.GK, playingPosition: PlayingPosition.Position14, value: 300000 },
	{ ...PLAYER, id: 15, name: 'Alan', surname: 'Piatek', shirtNumber: 15, position: PlayerPosition.CM, playingPosition: PlayingPosition.Position15, value: 100000 },
	{ ...PLAYER, id: 16, name: 'Simon', surname: 'Suso', shirtNumber: 16, position: PlayerPosition.RW, playingPosition: PlayingPosition.Position16, value: 200000 },
	{ ...PLAYER, id: 17, name: 'Clyde', surname: 'Frendo', shirtNumber: 17, position: PlayerPosition.ST, playingPosition: PlayingPosition.Position17, value: 50000 },
	{ ...PLAYER, id: 18, name: 'David', surname: 'Galea', shirtNumber: 18, position: PlayerPosition.ST, playingPosition: PlayingPosition.Position18, value: 50000 },
	{ ...PLAYER, id: 19, name: 'Matthew', surname: 'Angelis', shirtNumber: 19, position: PlayerPosition.CD, playingPosition: PlayingPosition.NoPosition, value: 50000 },
	{ ...PLAYER, id: 20, name: 'Chris', surname: 'Hill', shirtNumber: 26, position: PlayerPosition.CD, playingPosition: PlayingPosition.NoPosition, value: 80000 },
	{ ...PLAYER, id: 21, name: 'Michael', surname: 'Fsadni', shirtNumber: 99, position: PlayerPosition.CM, playingPosition: PlayingPosition.NoPosition, value: 100000 },
	{ ...PLAYER, id: 22, name: 'Sean', surname: 'Abela', shirtNumber: 73, position: PlayerPosition.CM, playingPosition: PlayingPosition.NoPosition, value: 90000 },
	{ ...PLAYER, id: 23, name: 'Alex', surname: 'Cauchi', shirtNumber: 76, position: PlayerPosition.ST, playingPosition: PlayingPosition.NoPosition, value: 20000 },
	{ ...PLAYER, id: 24, name: 'Norbert', surname: 'Borg', shirtNumber: 44, position: PlayerPosition.RM, playingPosition: PlayingPosition.NoPosition, value: 30000 }


]

