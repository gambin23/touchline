import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { Club, Player } from '../../../models/models.index';
import { ClubService } from '../sdk/club.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
	selector: 'club-page',
	templateUrl: './club.page.html',
	styleUrls: ['./club.page.scss']
})
export class ClubPage implements OnInit, OnDestroy {
	constructor(
		private clubService: ClubService,
		private authenticationService: AuthenticationService,
		private route: ActivatedRoute
	) { }

	subscription = new Subscription();
	club$: Observable<Club>;

	ngOnInit() {
		this.subscription.add(this.route.params.subscribe(params => {
			if (params.id) {
				this.club$ = this.clubService.club$(Number(params.id));
			} else {
				this.subscription.add(this.authenticationService.user$().subscribe(user => {
					this.club$ = this.clubService.club$(user.clubId);
				}));
			}
		}));
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}

	keyPlayers(players: Player[]) {
		return this.clubService.keyPlayers(players);
	}
}
