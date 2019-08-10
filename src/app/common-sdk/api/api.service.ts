import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, startWith } from 'rxjs/operators';

import { Api } from '../model';

@Injectable()
export class ApiService {
    constructor(private http: HttpClient) { }

    baseUrl = 'https://swapi.co/api';

    get$<T>(url: string, params?: HttpParams | { [param: string]: string | string[]; }, mock?: T): Observable<Api<T>> {
        return this.http.get(`${this.baseUrl}/${url}`, { params }).pipe(
            map((response: T) => { return { loading: false, data: mock ? mock : response } }),
            catchError(() => of({ loading: false, error: 'Something went wrong' })),
            startWith({ loading: true })
        )
    }

    post$<T>(url: string, body: T, params?: HttpParams | { [param: string]: string | string[]; }, mock?: T): Observable<Api<T>> {
        return this.http.post(`${this.baseUrl}/${url}`, body, { params }).pipe(
            map((response: T) => { return { loading: false, data: mock ? mock : response } }),
            catchError(() => of({ loading: false, error: 'Something went wrong' })),
            startWith({ loading: true })
        )
    }
}
