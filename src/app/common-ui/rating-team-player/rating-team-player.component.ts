import { Component, Input, OnInit } from '@angular/core';

import { Player } from '../../models/index';

@Component({
	selector: 'rating-team-player',
	templateUrl: './rating-team-player.component.html',
	styleUrls: ['./rating-team-player.component.scss']
})
export class RatingTeamPlayerComponent implements OnInit {
	@Input() team: Player[];
	@Input() player: Player;

	rating: number;

	ngOnInit() {
		const average = this.team.reduce((cv, p) => cv + p.value, 0) / this.team.length;
		let change = this.player.value - average;
		change = change / average;
		this.rating = Math.round(change) * 100;
	}
}

