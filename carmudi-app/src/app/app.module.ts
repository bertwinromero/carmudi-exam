import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { routes } from './app.route';
import { NgxPaginationModule } from 'ngx-pagination'; // <-- import the module
import { FormsModule } from '@angular/forms';

import { TruncatePipe } from './app.limitTo.pipe';
import { SearchPipe } from './app.search.pipe';



import { AppComponent } from './app.component';
import { ListComponent } from './cars/list/list.component';
import { SelectedComponent } from './cars/selected/selected.component';

import { CarsService } from './shared/car/cars.service';
import { CarResolveService } from './shared/car/car-resolve.service';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    SelectedComponent,
    TruncatePipe,
    SearchPipe

  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    NgxPaginationModule,
    FormsModule 
  ],
  providers: [
    CarsService,
    CarResolveService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
