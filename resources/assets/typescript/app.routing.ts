import { Routes, RouterModule } from '@angular/router';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyComponent } from './properties/property/property.component';
import { NotFoundComponent } from './errors/not-found.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/properties', pathMatch: 'full' },
    { path: 'properties', component: PropertyListComponent },
    { path: 'property/:id', component: PropertyComponent },
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' }
];

export const appRoutingProviders: any[] = [];

export const routing = RouterModule.forRoot(appRoutes);
