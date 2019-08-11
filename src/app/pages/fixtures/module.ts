import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiModule } from '../../ui/ui.module';
import { CommonUiModule } from '../../common-ui';
import { CommonSdkModule } from '../../common-sdk';

import { FixturesPage } from './ui/fixtures.page';
import { FixturesService } from './sdk/fixtures.service';

@NgModule({
	imports: [
		AngularCommonModule,
		RouterModule,
		CommonUiModule,
		CommonSdkModule,
		UiModule
	],
	declarations: [
		FixturesPage
	],
	exports: [
		FixturesPage
	],
	providers: [FixturesService]
})
export class FixturesModule { }
