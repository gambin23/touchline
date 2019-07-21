import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { FooterComponent } from './footer/footer.component';
import { ClubLogoComponent } from './club-logo/club-logo.component';
import { FlagComponent } from './flag/flag.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		TabsComponent,
		TabComponent,
		FooterComponent,
		ClubLogoComponent,
		FlagComponent,
		PanelComponent
	],
	exports: [
		TabsComponent,
		TabComponent,
		FooterComponent,
		ClubLogoComponent,
		FlagComponent,
		PanelComponent
	]
})
export class UiModule { }
