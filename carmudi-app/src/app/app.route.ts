import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ListComponent } from './cars/list/list.component';
import { SelectedComponent } from './cars/selected/selected.component';

import { CarResolveService } from './shared/car/car-resolve.service';

export const router: Routes = [
    { path: "", redirectTo: '/cars', pathMatch: 'full' },
    { path: "cars", component: ListComponent },
    {
        path: "car/:id",
        component: SelectedComponent,
        resolve: {
            car: CarResolveService
        }
    },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);