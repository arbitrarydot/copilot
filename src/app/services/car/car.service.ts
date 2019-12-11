import { Injectable } from '@angular/core';
import { User } from '../user/user.service';
import { ModelTesla, Make } from './car.enums';

export interface Car {
  make     : Make,
  model    : ModelTesla,
  color    : string,
  name     : string,
  owner    : User,
  firmware : string,
}


@Injectable({
  providedIn: 'root'
})
export class CarService {
  private carInfo : Car;

  constructor() { }
}
