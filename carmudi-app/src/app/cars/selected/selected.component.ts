import { Component, OnInit, ViewEncapsulation, Pipe, PipeTransform } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { CarsService } from '../../shared/car/cars.service';
import { Car } from "../../shared/car/car";

@Component({
  selector: 'app-selected',
  templateUrl: './selected.component.html',
  styleUrls: [
    './selected.component.css',
    '../list/list.component.css'
  ],
  providers: [
    CarsService
  ]
})
export class SelectedComponent implements OnInit {

  car: Car;

  constructor(private _activatedRoute: ActivatedRoute, private carService: CarsService) { }

  ngOnInit() {
    this._activatedRoute.data.forEach((data : { car : Car }) =>{
      this.car = data.car;
    });

  }


}
