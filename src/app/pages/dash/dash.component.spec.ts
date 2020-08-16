import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashComponent } from './dash.component';
import { of, Observable } from 'rxjs';
import { TeslaApiService } from '../../services/tesla-api/tesla-api.service';
import { CarService } from '../../services/car/car.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('DashComponent', () => {
	let component: DashComponent;
	let fixture: ComponentFixture<DashComponent>;

	const getTokenFromStorage: jest.Mock<any, []> = jest.fn(() => null);
	const setToken: jest.Mock<any, []> = jest.fn(() => null);
	const getToken: jest.Mock<any, []> = jest.fn(() => null);
	const authenticatePassword: jest.Mock<Observable<string>, any> = jest.fn((email: string, password: string) =>
		of('authorized')
	);
	const refreshToken: jest.Mock<any, []> = jest.fn(() => null);
	const getVehicles: jest.Mock<any, []> = jest.fn(() => of(['vehicle 1', 'vehicle 2']));
	const getVehicleData: jest.Mock<Observable<any>, [string]> = jest.fn((id: string) => of({}));

	const teslaApiService: any = {
		getTokenFromStorage,
		setToken,
		getToken,
		authenticatePassword,
		refreshToken,
		getVehicles,
		getVehicleData,
	};

	const carService: any = {};

	beforeAll(() => {
		TestBed.configureTestingModule({
			declarations: [DashComponent],
			schemas: [NO_ERRORS_SCHEMA],
			providers: [
				{ provide: TeslaApiService, useValue: teslaApiService },
				{ provide: CarService, useValue: carService },
			],
		}).compileComponents();

		fixture = TestBed.createComponent(DashComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
