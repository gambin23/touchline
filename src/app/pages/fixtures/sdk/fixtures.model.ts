import { Club, Match } from '../../../models';

export interface FixturesViewModel {
	club: Club;
	inProgress: Match;
	playedMatches: Match[];
	futureMatches: Match[];
}
