import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tabs/tab.component';
import { FooterComponent } from './footer/footer.component';
import { PanelComponent } from './panel/panel.component';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
	imports: [
		CommonModule
	],
	declarations: [
		TabsComponent,
		TabComponent,
		FooterComponent,
		PanelComponent,
		CircleProgressComponent,
		LoaderComponent
	],
	exports: [
		TabsComponent,
		TabComponent,
		FooterComponent,
		PanelComponent,
		CircleProgressComponent,
		LoaderComponent
	]
})
export class UiModule { }
