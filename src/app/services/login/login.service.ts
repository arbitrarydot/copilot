import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { defer, of, EMPTY } from 'rxjs';
import { first, catchError, tap } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class LoginService {
	constructor(private angularFireAuth: AngularFireAuth) {}

	loginWithGoogle(): void {
		defer(() => this.angularFireAuth.signInWithPopup(new auth.GoogleAuthProvider()))
			.pipe(
				first(),
				tap((res: auth.UserCredential) => {
					console.log(res);
				}),
				catchError((error: any) => {
					console.log(error);
					return EMPTY;
				})
			)
			.subscribe();
	}

	loginWithEmailAndPassword(email: string, password: string): void {
		defer(() => this.angularFireAuth.signInWithEmailAndPassword(email, password))
			.pipe(
				first(),
				tap((res: auth.UserCredential) => {
					console.log(res);
				}),
				catchError((error: any) => {
					console.log(error);
					return EMPTY;
				})
			)
			.subscribe();
	}

	createWithEmailAndPassword(email: string, password: string): void {
		defer(() => this.angularFireAuth.createUserWithEmailAndPassword(email, password))
			.pipe(
				first(),
				tap((res: auth.UserCredential) => {
					console.log(res);
				}),
				catchError((error: any) => {
					console.log(error);
					return EMPTY;
				})
			)
			.subscribe();
	}
}
