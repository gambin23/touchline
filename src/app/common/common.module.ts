import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { UiModule } from '../ui/ui.module';

import { CountryPipe } from './pipes/country.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

import { ClubLogoComponent } from '../common/club-logo/club-logo.component';
import { FlagComponent } from '../common/flag/flag.component';
import { PlayerImageComponent } from './player-image/player-image.component';
import { RatingComponent } from './rating/rating.component';
import { FitnessComponent } from './fitness/fitness.component';
import { RatingTeamPlayerComponent } from './rating-team-player/rating-team-player.component';
import { PlayerTooltipComponent } from './player-tooltip/player-tooltip.component';
import { PlayerBarComponent } from './player-bar/player-bar.component';
import { RouterModule } from '@angular/router';
import { FixtureListComponent } from './fixture-list/fixture-list.component';
import { PlayerListComponent } from './player-list/player-list.component';

@NgModule({
	imports: [
		AngularCommonModule,
		RouterModule,
		UiModule
	],
	declarations: [
		CountryPipe,
		TruncatePipe,
		ClubLogoComponent,
		FlagComponent,
		PlayerImageComponent,
		RatingComponent,
		FitnessComponent,
		RatingTeamPlayerComponent,
		PlayerTooltipComponent,
		PlayerBarComponent,
		FixtureListComponent,
		PlayerListComponent
	],
	exports: [
		CountryPipe,
		TruncatePipe,
		ClubLogoComponent,
		FlagComponent,
		PlayerImageComponent,
		RatingComponent,
		FitnessComponent,
		RatingTeamPlayerComponent,
		PlayerTooltipComponent,
		PlayerBarComponent,
		FixtureListComponent,
		PlayerListComponent
	]
})
export class CommonModule { }
