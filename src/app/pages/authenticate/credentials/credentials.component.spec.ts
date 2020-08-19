import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredentialsComponent } from './credentials.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { LoginService } from '../../../services/login/login.service';
import { FormBuilder } from '@angular/forms';

describe('CredentialsComponent', () => {
	let component: CredentialsComponent;
	let fixture: ComponentFixture<CredentialsComponent>;

	const loginWithGoogle: any = jest.fn(() => {});
	const loginWithEmailAndPassword: any = jest.fn(() => {});
	const createWithEmailAndPassword: any = jest.fn(() => {});

	const loginService: any = {
		loginWithGoogle,
		loginWithEmailAndPassword,
		createWithEmailAndPassword,
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			providers: [{ provide: LoginService, useValue: loginService }, FormBuilder],
			declarations: [CredentialsComponent],
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CredentialsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
