import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { PlayersService } from '../../services/players.service';
import { Player, PlayerPosition } from 'src/app/models/players.model';

@Component({
	selector: 'player-page',
	templateUrl: './player.page.html',
	styleUrls: ['./player.page.scss']
})
export class PlayerPage implements OnInit, OnDestroy {

	constructor(
		private playersService: PlayersService,
		private route: ActivatedRoute
	) { }

	subscription = new Subscription();
	player$: Observable<Player>;
	positions = PlayerPosition;

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.player$ = this.playersService.player$(Number(params.id));
		});
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
