import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { PlayersService } from '../../services/players.service';
import { Player } from 'src/app/models/players.model';

@Component({
	selector: 'player-page',
	templateUrl: './player.page.html',
	styleUrls: ['./player.page.scss']
})
export class PlayerPage implements OnInit {
	constructor(private playersService: PlayersService) { }

	player$: Observable<Player>;

	ngOnInit() {
		this.player$ = this.playersService.player$(1);
	}
}
