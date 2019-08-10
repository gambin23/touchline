import { Component, Input } from '@angular/core';

import { Player } from '../../models/index';

@Component({
	selector: 'player-tooltip',
	templateUrl: './player-tooltip.component.html',
	styleUrls: ['./player-tooltip.component.scss']
})
export class PlayerTooltipComponent {
	@Input() player: Player;

}
