import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { AppState } from '../model';

@Injectable()
export class LoaderSelector {
	constructor(private store: Store<AppState>) { }

	loading$(): Observable<boolean> {
		return this.store.select(state => state.loader.loading);
	}
}
