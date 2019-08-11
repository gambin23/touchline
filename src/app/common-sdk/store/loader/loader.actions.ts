import { Injectable } from '@angular/core';
import { Store, createAction, union, props } from '@ngrx/store';

import { AppState } from '../model';

const loader = '[LOADER]';

export const showLoader = createAction(`${loader} Show`);
export const hideLoader = createAction(`${loader} Hide`);

@Injectable()
export class LoaderActions {
	constructor(private store: Store<AppState>) { }

	showLoader() {
		this.store.dispatch(showLoader());
	}

	hideLoader() {
		this.store.dispatch(hideLoader());
	}
}
