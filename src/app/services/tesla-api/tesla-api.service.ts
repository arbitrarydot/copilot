import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const BASE_URI = "/tesla-api";
const CLIENT_ID = "81527cff06843c8634fdc09e8ac0abefb46ac849f38fe1e431c2ef2106796384";
const CLIENT_SECRET = "c7257eb71a564034f9419ee651c7d0e5f7aa6bfbd18bafb5c5c033b093bb2fa3";
const USER_AGENT = "Copilot"


@Injectable({
  providedIn: 'root'
})
export class TeslaApiService {


  constructor(private http : HttpClient) { }


  /**
   * Attempt to authenticate with the Tesla API via email and password
   * @param email 
   * @param password 
   */
  authenticatePassword(email : string, password : string) : Observable<any> {
    console.log('authenticatePassword')
    return this.http.post(BASE_URI + '/oauth/token', {
      grant_type: "password",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      email,
      password
    });
  }

  refreshToken() {

  }

}
