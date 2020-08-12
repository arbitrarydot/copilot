import { Component, OnInit } from '@angular/core';
import { TeslaApiService } from 'src/app/services/tesla-api/tesla-api.service';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.scss']
})
export class DashComponent implements OnInit {
  public vehicles;
  public selectedVehicle : number;

  constructor(private tesla : TeslaApiService,
              public  car   : CarService) { }

  ngOnInit() {
    this.getVehicles();
  }

  getVehicles() {
    this.tesla.getVehicles().subscribe((res : any) => {
      this.vehicles = res.response;
      if (this.vehicles.length = 1) {
        this.selectedVehicle = this.vehicles[0].vehicle_id;
        // this.car.setId(this.selectedVehicle);
      }
    })
  }

}
