import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayersService } from '../../services/players.service';
import { Player, PlayerPosition } from '../../models/index';

@Component({
	selector: 'players-page',
	templateUrl: './players.page.html',
	styleUrls: ['./players.page.scss']
})
export class PlayersPage implements OnInit {
	constructor(private playersService: PlayersService) { }

	players$: Observable<Player[]>;
	positions = PlayerPosition;
	activeView: ListView = 'list';

	ngOnInit() {
		this.players$ = this.playersService.players$(1);
	}

	changeView(view: ListView) {
		this.activeView = view;
	}
}


export type ListView = 'list' | 'grid';
export type SortPlayer = 'value' | 'salary' | 'age' | 'shirt';
