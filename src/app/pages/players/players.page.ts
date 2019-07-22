import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayersService } from '../../services/players.service';
import { Player } from 'src/app/models/players.model';

@Component({
	selector: 'players-page',
	templateUrl: './players.page.html',
	styleUrls: ['./players.page.scss']
})
export class PlayersPage implements OnInit {
	constructor(private playersService: PlayersService) { }

	players$: Observable<Player[]>;

	ngOnInit() {
		this.players$ = this.playersService.players$(1);
	}
}
