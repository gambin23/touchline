import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		TabsComponent,
		TabComponent,
		FooterComponent
	],
	exports: [
		TabsComponent,
		TabComponent,
		FooterComponent
	]
})
export class UiModule { }
