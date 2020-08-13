// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable camelcase */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeslaApiService {

  private static readonly baseUrl: string = `/tesla-api`;
  private static readonly clientId: string = `81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384`;
  private static readonly clientSecret: string = `c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3`;
  private static readonly userAgent: string = `Copilot`;
  private static readonly authEndpoint: string = `${TeslaApiService.baseUrl}/oauth/token`;

  private _token : string;

  constructor(private http : HttpClient) { }

  getTokenFromStorage() : string {
    return localStorage.getItem('tesla-token');
  }

  setToken(pTok : string): void {
    this._token = pTok;
  }

  getToken() : string {
    if (!this._token) {
      const tokenInStorage = localStorage.getItem('tesla-token');
      if (tokenInStorage) this.setToken(tokenInStorage);
    }
    return this._token;
  }

  /************************************
   * API Calls
   *************************************/

  /**
   * Attempt to authenticate with the Tesla API via email and password
   * @param email
   * @param password
   */
  authenticatePassword(email : string, password : string) : Observable<any> {
    return this.http.post(TeslaApiService.authEndpoint, {
      grant_type: 'password',
      client_id: TeslaApiService.clientId,
      client_secret: TeslaApiService.clientSecret,
      email: email,
      password: password
    });
  }

  /** TODO */
  refreshToken(): void {
    // no-op.
  }

  getVehicles() : Observable<any> {
    return this.http.get(`${TeslaApiService.baseUrl}/api/1/vehicles`, {});
  }

  getVehicleData(id : number) : Observable<any> {
    return this.http.get(`${TeslaApiService.baseUrl}/api/1/vehicles/${id}/vehicle_data`, {});
  }

}
