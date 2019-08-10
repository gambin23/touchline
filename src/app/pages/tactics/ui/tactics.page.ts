import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { cloneDeep } from 'lodash';


import { Player, PlayerPosition } from '../../../models/index';
import { TacticsService } from '../sdk/tactics.service';

@Component({
	selector: 'tactics-page',
	templateUrl: './tactics.page.html',
	styleUrls: ['./tactics.page.scss']
})
export class TacticsPage implements OnInit, OnDestroy {
	constructor(private tacticsService: TacticsService) { }

	subscription = new Subscription();
	playerPositions = PlayerPosition;
	players: Player[];
	loading: boolean;
	error: string;
	initialSelection: Player[];
	previousSelection: Player[][] = [];
	selectedPlayer: Player;

	ngOnInit() {
		this.subscription.add(this.tacticsService.tactics$().subscribe(tactics => {
			this.players = tactics.data;
			this.loading = tactics.loading;
			this.error = tactics.error;
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
		this.tacticsService.save();
		this.previousSelection = [];
	}

	undo() {
		this.players = this.previousSelection[this.previousSelection.length - 1];
		this.previousSelection.pop();
	}
}
