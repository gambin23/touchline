import { Component, Input } from '@angular/core';

import { Player, PlayerPosition } from '../../models/index';

@Component({
	selector: 'player-bar',
	templateUrl: './player-bar.component.html',
	styleUrls: ['./player-bar.component.scss']
})
export class PlayerBarComponent {
	@Input() player: Player;
	@Input() tooltip = false;
	@Input() link = true;
	@Input() team?: Player[];

	positions = PlayerPosition;
}
