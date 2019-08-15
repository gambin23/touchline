import { NgModule } from '@angular/core';
import { CommonModule as AngularCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { UiModule } from '../../ui/ui.module';
import { CommonUiModule } from '../../common-ui';
import { CommonSdkModule } from '../../common-sdk';

import { PlayerPage } from './ui/player.page';
import { PlayerStatsComponent } from './ui/stats/stats.component';
import { PlayerService } from './sdk/player.service';
import { PlayerContractComponent } from './ui/contract/contract.component';
import { PlayerTransferComponent } from './ui/transfer/transfer.component';

@NgModule({
	imports: [
		AngularCommonModule,
		RouterModule,
		CommonUiModule,
		CommonSdkModule,
		UiModule
	],
	declarations: [
		PlayerPage,
		PlayerStatsComponent,
		PlayerContractComponent,
		PlayerTransferComponent
	],
	exports: [
		PlayerPage
	],
	providers: [PlayerService]
})
export class PlayerModule { }
