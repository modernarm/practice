import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {CustomerComponent} from './customer/customer.component';

export const router: Routes = [
    {path: '', redirectTo: 'root', pathMatch: 'full'},
    {path: 'customer', component: CustomerComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
