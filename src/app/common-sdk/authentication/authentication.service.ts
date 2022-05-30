import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { User } from '../../models/index';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
	constructor(private router: Router) {
	}

	private isAuthenticated = new BehaviorSubject<boolean>(this.initialState());

	login(user: User) {
		localStorage.setItem('user', JSON.stringify(user));
		this.isAuthenticated.next(true);
	}

	logout() {
		localStorage.setItem('user', null);
		this.router.navigate(['login']);
		this.isAuthenticated.next(false);
	}

	isAuthenticated$(): Observable<boolean> {
		return this.isAuthenticated;
	}

	user$(): Observable<User> {
		return of(JSON.parse(localStorage.getItem('user')));
	}

	private initialState() {
		const user = localStorage.getItem('user');
		return !!user;
	}
}
