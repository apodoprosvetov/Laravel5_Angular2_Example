import { Routes, RouterModule } from '@angular/router';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyComponent } from './properties/property/property.component';

const appRoutes: Routes = [
    { path: '', component: PropertyListComponent },
    { path: 'property/:id', component: PropertyComponent }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
