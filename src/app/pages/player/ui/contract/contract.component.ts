import { Component, Input } from '@angular/core';

import { Player } from '../../../../models/index';

@Component({
	selector: 'player-contract',
	templateUrl: './contract.component.html',
	styleUrls: ['./contract.component.scss']
})
export class PlayerContractComponent {

	constructor() { }

	@Input() player: Player;
}
