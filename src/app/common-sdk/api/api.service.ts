import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith, finalize } from 'rxjs/operators';

import { Api } from '../model';
import { LoaderActions } from '../store/loader/loader.actions';

@Injectable()
export class ApiService {
	constructor(
		private http: HttpClient,
		private loaderActions: LoaderActions
	) { }

	baseUrl = 'https://swapi.dev/api';

	get$<T>(url: string, params?: HttpParams | { [param: string]: string | string[]; }, mock?: T): Observable<Api<T>> {
		this.loaderActions.showLoader();
		return this.http.get(`${this.baseUrl}/${url}`, { params }).pipe(
			map((response: T) => ({ loading: false, data: mock ? mock : response })),
			catchError(() => of({ loading: false, error: 'Something went wrong' })),
			startWith({ loading: true }),
			finalize(() => this.loaderActions.hideLoader())
		);
	}

	post$<T>(url: string, body: T, params?: HttpParams | { [param: string]: string | string[]; }, mock?: T): Observable<Api<T>> {
		return this.http.post(`${this.baseUrl}/${url}`, body, { params }).pipe(
			map((response: T) => ({ loading: false, data: mock ? mock : response })),
			catchError(() => of({ loading: false, error: 'Something went wrong' })),
			startWith({ loading: true })
		);
	}
}
