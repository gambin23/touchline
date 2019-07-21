import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		TabsComponent,
		TabComponent
	],
	exports: [
		TabsComponent,
		TabComponent
	]
})
export class UiModule { }
