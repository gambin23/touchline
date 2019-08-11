import { createReducer, on } from '@ngrx/store';

import { LoaderState } from './loader.model';
import { showLoader, hideLoader } from './loader.actions';

const INITIAL_STATE: LoaderState = {
	loading: false
};

const reducer = createReducer(
	INITIAL_STATE,
	on(showLoader, state => ({ ...state, loading: true })),
	on(hideLoader, state => ({ ...state, loading: false }))
);

export function loaderReducer(state: LoaderState, action) {
	return reducer(state, action);
}
