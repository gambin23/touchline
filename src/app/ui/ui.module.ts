import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { FooterComponent } from './footer/footer.component';
import { PanelComponent } from './panel/panel.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		TabsComponent,
		TabComponent,
		FooterComponent,
		PanelComponent
	],
	exports: [
		TabsComponent,
		TabComponent,
		FooterComponent,
		PanelComponent
	]
})
export class UiModule { }
