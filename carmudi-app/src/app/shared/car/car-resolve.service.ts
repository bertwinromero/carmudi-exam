import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, ActivatedRoute, Params } from '@angular/router';

import { CarsService } from '../../shared/car/cars.service';
import { Car } from "../../shared/car/car";
@Injectable()
export class CarResolveService implements Resolve<Car>{

  constructor( private _carsService: CarsService, private _activatedRoute: ActivatedRoute ) { }

  resolve(route: ActivatedRouteSnapshot){
    let carId = route.params.id;
    
    return this._carsService.getSelected(carId);
  }

}
