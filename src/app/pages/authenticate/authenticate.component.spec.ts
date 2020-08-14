import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticateComponent } from './authenticate.component';
import { Observable, of } from 'rxjs';
import { TeslaApiService } from '../../services/tesla-api/tesla-api.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AuthenticateComponent', () => {
  let component: AuthenticateComponent;
  let fixture: ComponentFixture<AuthenticateComponent>;

  const getTokenFromStorage: jest.Mock<any, []> = jest.fn(() => null);
  const setToken: jest.Mock<any, []> = jest.fn(() => null);
  const getToken: jest.Mock<any, []> = jest.fn(() => null);
  const authenticatePassword: jest.Mock<Observable<string>, any> =
    jest.fn((email: string, password: string) => of('authorized'));
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
    getVehicleData
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [{ provide: TeslaApiService, useValue: teslaApiService }],
      declarations: [AuthenticateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthenticateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
