import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { UiModule } from '../ui/ui.module';
import { ClubLogoComponent } from '../common/club-logo/club-logo.component';
import { FlagComponent } from '../common/flag/flag.component';
import { PlayerImageComponent } from './player-image/player-image.component';
import { RatingComponent } from './rating/rating.component';
import { CountryPipe } from './pipes/country.pipe';
import { FitnessComponent } from './fitness/fitness.component';
import { RatingTeamPlayerComponent } from './rating-team-player/rating-team-player.component';
import { PlayerTooltipComponent } from './player-tooltip/player-tooltip.component';
import { PlayerBarComponent } from './player-bar/player-bar.component';
import { RouterModule } from '@angular/router';

@NgModule({
	imports: [
		AngularCommonModule,
		RouterModule,
		UiModule
	],
	declarations: [
		ClubLogoComponent,
		FlagComponent,
		PlayerImageComponent,
		RatingComponent,
		CountryPipe,
		FitnessComponent,
		RatingTeamPlayerComponent,
		PlayerTooltipComponent,
		PlayerBarComponent
	],
	exports: [
		ClubLogoComponent,
		FlagComponent,
		PlayerImageComponent,
		RatingComponent,
		CountryPipe,
		FitnessComponent,
		RatingTeamPlayerComponent,
		PlayerTooltipComponent,
		PlayerBarComponent
	]
})
export class CommonModule { }
