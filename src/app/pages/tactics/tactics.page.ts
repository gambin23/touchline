import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { orderBy, cloneDeep } from 'lodash';

import { PlayersService } from '../../services/players.service';
import { Player, PlayerPosition, PlayingPosition } from '../../models/models.index';

@Component({
	selector: 'tactics-page',
	templateUrl: './tactics.page.html',
	styleUrls: ['./tactics.page.scss']
})
export class TacticsPage implements OnInit, OnDestroy {
	constructor(private playersService: PlayersService, private change: ChangeDetectorRef) { }

	subscription = new Subscription();
	playerPositions = PlayerPosition;
	players: Player[];
	previousSelection: Player[][] = [];
	selectedPlayer: Player;

	ngOnInit() {
		this.subscription.add(this.playersService.players$(1).subscribe(players => {
			this.players = this.orderPlayers(players);
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
			this.players = this.orderPlayers(this.players);
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

	private orderPlayers(players: Player[]): Player[] {
		const starting11 = orderBy(players
			.filter(p => p.playingPosition >= PlayingPosition.Position1 && p.playingPosition <= PlayingPosition.Position11),
			p => p.playingPosition);
		const subs = orderBy(players.filter(p => p.playingPosition > PlayingPosition.Position11), p => p.playingPosition);
		const others = players.filter(p => p.playingPosition === PlayingPosition.NoPosition);
		return [...starting11, ...subs, ...others];
	}
}
