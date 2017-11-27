import { Injectable } from '@angular/core';
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx"
import "rxjs/add/operator/map";

import { Car } from "../../shared/car/car";

@Injectable()
export class CarsService {

  private _car: Car;
  constructor(private _http: Http) { }

  load() {
    return this._http.get('assets/cars.json')
      .map((response: Response) => response.json());
  }

  getSelected(id) {
    return this._http.get('assets/cars.json')
      .map(res => res.json())
      .map(data => {
        let selected = data.cars.find(x => x.id === id);
        return selected;
      })
  }
}
