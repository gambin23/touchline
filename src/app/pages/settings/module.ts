import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule as AngularCommonModule } from '@angular/common';

import { UiModule } from '../../ui/ui.module';
import { CommonUiModule } from '../../common-ui';
import { CommonSdkModule } from '../../common-sdk';

import { SettingsBackgroundComponent } from './ui/background/background.component';
import { SettingsPage } from './ui/settings.page';

@NgModule({
	imports: [
		AngularCommonModule,
		RouterModule,
		CommonUiModule,
		CommonSdkModule,
		UiModule
	],
	declarations: [
		SettingsBackgroundComponent,
		SettingsPage
	],
	exports: [
		SettingsBackgroundComponent,
		SettingsPage
	],
	providers: []
})
export class SettingsModule { }
