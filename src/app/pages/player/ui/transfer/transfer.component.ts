import { Component, Input } from '@angular/core';

import { Player } from '../../../../models/index';

@Component({
	selector: 'player-transfer',
	templateUrl: './transfer.component.html',
	styleUrls: ['./transfer.component.scss']
})
export class PlayerTransferComponent {

	constructor() { }

	@Input() player: Player;
}
