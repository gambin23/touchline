import { ActionReducerMap } from '@ngrx/store';

import { AppState } from './model';
import { loaderReducer } from './loader/loader.reducer';

export const reducers: ActionReducerMap<AppState, any> = {
	loader: loaderReducer
};
