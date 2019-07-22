import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { ClubLogoComponent } from '../common/club-logo/club-logo.component';
import { FlagComponent } from '../common/flag/flag.component';
import { PlayerImageComponent } from '../common/player-image/player-image.component';
import { RatingComponent } from './rating/rating.component';
import { CountryPipe } from './pipes/country.pipe';

@NgModule({
	imports: [
		AngularCommonModule
	],
	declarations: [
		ClubLogoComponent,
		FlagComponent,
		PlayerImageComponent,
		RatingComponent,
		CountryPipe
	],
	exports: [
		ClubLogoComponent,
		FlagComponent,
		PlayerImageComponent,
		RatingComponent,
		CountryPipe
	]
})
export class CommonModule { }
