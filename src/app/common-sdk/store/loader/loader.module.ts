import { NgModule } from '@angular/core';

import { LoaderActions } from './loader.actions';
import { LoaderSelector } from './loader.selector';

@NgModule({
	imports: [],
	declarations: [],
	exports: [],
	providers: [
		LoaderActions,
		LoaderSelector
	]
})
export class LoaderStateModule { }
