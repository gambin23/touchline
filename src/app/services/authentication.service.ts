import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { User } from '../models/authentication.model';

@Injectable()
export class AuthenticationService {
	constructor() { }

	private isAuthenticated = new BehaviorSubject<boolean>(this.initialState());

	login(user: User) {
		localStorage.setItem('user', JSON.stringify(user));
		this.isAuthenticated.next(true);
	}

	logout() {
		localStorage.setItem('user', null);
		this.isAuthenticated.next(false);
	}

	isAuthenticated$() {
		return this.isAuthenticated.asObservable();
	}

	getUser$(): Observable<User> {
		return of(JSON.parse(localStorage.getItem('user')));
	}

	private initialState() {
		const user = localStorage.getItem('user');
		return user !== 'null' ? true : false;
	}
}
