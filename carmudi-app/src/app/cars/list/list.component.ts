import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

import { CarsService } from '../../shared/car/cars.service';
import { Car } from "../../shared/car/car";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [CarsService]
})
export class ListComponent implements OnInit {

  carList: Array<Car> = [];
  carSize: number;
  itemFrom: number;
  itemTo: number;
  currentPage: number;
  displayItems: number;

  constructor(private carService: CarsService, private _router: Router) { }

  ngOnInit() {
    this.itemFrom = 1;
    this.itemTo = 10;
    this.currentPage = 1;
    this.displayItems = 10;

    this.carService.load()
      .subscribe(loadedCars => {
        this.carList = loadedCars.cars;
        this.carSize = this.carList.length;
      })

    this.InitializeBackToTop();
  }

  selectedCar(id) {
    this._router.navigate(['./car/' + id]);
  }

  pageChanged(pageNumber) {
    this.currentPage = pageNumber;
    this.itemTo = this.displayItems * pageNumber;
    if (this.itemTo >= this.carSize) {
      this.itemTo = this.carSize;
      this.displayItems = this.carSize % this.displayItems;
    }

    this.itemFrom = this.itemTo - (this.displayItems - 1);

  }

  updateCarList(query) {
    let keys = 'name';
    let results = (this.carList || []).filter((item) => keys.split(',').some(key => item.hasOwnProperty(key) && new RegExp(query, 'gi').test(item[key])));
    this.displayItems = 10;

    this.carSize = results.length;

    if (this.carSize == 0) {
      this.itemFrom = 0;
      this.itemTo = 0;
    }

    else if(this.carSize < this.displayItems){
      this.itemTo = this.carSize
    }

    else {
      this.itemTo = this.displayItems * this.currentPage;
      this.itemFrom = this.itemTo - (this.displayItems - 1);
    }

    if (query === '' || query === null) {
      this.itemFrom = 1;
      this.itemTo = 10;
      if (this.currentPage > 1) {
        this.displayItems = 10;
        this.itemTo = this.displayItems * this.currentPage;
        this.itemFrom = this.itemTo - (this.displayItems - 1);
      }
    }
  } 

  InitializeBackToTop() {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backTop").style.display = "block";
      } else {
        document.getElementById("backTop").style.display = "none";
      }
    }
  }
  backToTop() {
  
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

  }

}
