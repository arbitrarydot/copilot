import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { defer, EMPTY } from 'rxjs';
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
				tap((_res: auth.UserCredential) => {
					// do something with the result.
				}),
				catchError((_error: any) => {
					// tell the user they messed up.
					return EMPTY;
				})
			)
			.subscribe();
	}

	loginWithEmailAndPassword(email: string, password: string): void {
		defer(() => this.angularFireAuth.signInWithEmailAndPassword(email, password))
			.pipe(
				first(),
				tap((_res: auth.UserCredential) => {
					// do something with the result.
				}),
				catchError((_error: any) => {
					// tell the user they messed up.
					return EMPTY;
				})
			)
			.subscribe();
	}

	createWithEmailAndPassword(email: string, password: string): void {
		defer(() => this.angularFireAuth.createUserWithEmailAndPassword(email, password))
			.pipe(
				first(),
				tap((_res: auth.UserCredential) => {
					// do something with the result.
				}),
				catchError((_error: any) => {
					// tell the user they messed up.
					return EMPTY;
				})
			)
			.subscribe();
	}
}
