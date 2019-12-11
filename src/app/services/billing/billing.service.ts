import { Injectable } from '@angular/core';
import { SubscriptionMethod } from './billing.enums';

export interface Subscription {
  method : SubscriptionMethod,
  id : string,
  expires : Date
}


@Injectable({
  providedIn: 'root'
})
export class BillingService {

  constructor() { }
}
