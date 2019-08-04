import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { orderBy, cloneDeep } from 'lodash';

import { PlayersService } from '../../../services/players.service';
import { Player, PlayerPosition } from '../../../models/index';
import { TacticsService } from '../sdk/tactics.service';

@Component({
	selector: 'tactics-page',
	templateUrl: './tactics.page.html',
	styleUrls: ['./tactics.page.scss']
})
export class TacticsPage implements OnInit, OnDestroy {
	constructor(
		private playersService: PlayersService,
		private tacticsService: TacticsService
	) { }

	subscription = new Subscription();
	playerPositions = PlayerPosition;
	players: Player[];
	initialSelection: Player[];
	previousSelection: Player[][] = [];
	selectedPlayer: Player;

	ngOnInit() {
		this.subscription.add(this.playersService.players$(1).subscribe(players => {
			this.players = this.tacticsService.orderPlayers(players);
		}));
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	drop(event: any) {
		event.preventDefault();
		const replacedPlayer = { ...this.players.find(p => p.id === Number(event.currentTarget.id)) };
		if (this.selectedPlayer.id !== replacedPlayer.id) {
			this.previousSelection.push(cloneDeep(this.players));
			this.players.find(p => p.id === this.selectedPlayer.id).playingPosition = replacedPlayer.playingPosition;
			this.players.find(p => p.id === replacedPlayer.id).playingPosition = this.selectedPlayer.playingPosition;
			this.players = this.tacticsService.orderPlayers(this.players);
		}
	}

	allowDrop(event: any) {
		event.preventDefault();
	}

	drag(event: any) {
		this.selectedPlayer = { ...this.players.find(p => p.id === Number(event.currentTarget.id)) };
	}

	save() {
		console.log('saving players');
		this.previousSelection = [];
	}

	undo() {
		this.players = this.previousSelection[this.previousSelection.length - 1];
		this.previousSelection.pop();
	}
}
