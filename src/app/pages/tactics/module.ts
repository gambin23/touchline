import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { UiModule } from '../../ui/ui.module';
import { CommonUiModule } from '../../common-ui';
import { CommonSdkModule } from '../../common-sdk';

import { TacticsService } from './sdk/tactics.service';
import { TacticsPage } from './ui/tactics.page';

@NgModule({
	imports: [
		AngularCommonModule,
		CommonUiModule,
		CommonSdkModule,
		UiModule
	],
	declarations: [
		TacticsPage
	],
	exports: [
		TacticsPage
	],
	providers: [TacticsService]
})
export class TacticsModule { }
