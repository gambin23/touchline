import { Component, Input } from '@angular/core';

import { Player } from '../../../../models/models.index';

@Component({
	selector: 'player-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class PlayerDetailsComponent {

	constructor() { }

	@Input() player: Player;
}
