import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Api } from '../../../common-sdk';
import { Player, PlayerPosition, Agent } from '../../../models';

import { PlayerService } from '../sdk/player.service';

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
	player: Player;
	agent$: Observable<Api<Agent>>;
	positions = PlayerPosition;

	ngOnInit() {
		this.subscription.add(this.route.params.subscribe(params => {
			this.subscription.add(this.playersService.player$(Number(params.id)).subscribe(playerResponse => {
				if (playerResponse.data) {
					this.player = playerResponse.data;
					this.agent$ = this.playersService.agent$(this.player.agentId);
				}
			}));
		}));
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
