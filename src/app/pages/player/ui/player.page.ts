import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Api } from '../../../common-sdk';

import { PlayerService } from '../sdk/player.service';
import { Player, PlayerPosition } from '../../../models/index';

@Component({
	selector: 'player-page',
	templateUrl: './player.page.html',
	styleUrls: ['./player.page.scss']
})
export class PlayerPage implements OnInit, OnDestroy {

	constructor(
		private playersService: PlayerService,
		private route: ActivatedRoute
	) { }

	subscription = new Subscription();
	player$: Observable<Api<Player>>;
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
