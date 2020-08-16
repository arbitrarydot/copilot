import { TestBed } from '@angular/core/testing';

import { TeslaApiService } from './tesla-api.service';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

describe('TeslaApiService', () => {
	let teslaApiService: TeslaApiService;

	const get: any = jest.fn(() => of([]));
	const post: any = jest.fn(() => of([]));

	const httpClient: any = {
		get,
		post,
	};

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			providers: [{ provide: HttpClient, useValue: httpClient }],
		});

		teslaApiService = TestBed.get(TeslaApiService);
	});

	it('should be created', () => {
		expect(teslaApiService).toBeTruthy();
	});
});
