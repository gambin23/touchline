import { Component, Input } from '@angular/core';

import { Player } from '../../../../models/index';

@Component({
	selector: 'player-stats',
	templateUrl: './stats.component.html',
	styleUrls: ['./stats.component.scss']
})
export class PlayerStatsComponent {

	constructor() { }

	@Input() player: Player;
}
