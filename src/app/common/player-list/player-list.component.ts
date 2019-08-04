import { Component, Input } from '@angular/core';

import { Player } from '../../models/index';

@Component({
	selector: 'player-list',
	templateUrl: './player-list.component.html',
	styleUrls: ['./player-list.component.scss']
})
export class PlayerListComponent {
	@Input() players: Player[];
	@Input() tooltip = false;
	@Input() teamRating = true;
}
