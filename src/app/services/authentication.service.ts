import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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

	getUser(): User {
		return JSON.parse(localStorage.getItem('user'));
	}

	private initialState() {
		const user = this.getUser();
		return user ? true : false;
	}
}
