import { Injectable } from '@angular/core';
import { Car } from '../car/car.service';

export interface User {
	id: string;
	email: string;
	firstName: string;
	lastName: string;
	premium: boolean;
	founder: boolean;
	cars: Car[];
	token: string;
}

@Injectable({
	providedIn: 'root',
})
export class UserService {
	constructor() {}
}
