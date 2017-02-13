import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { routing, appRoutingProviders }       from './app.routing';
import { AppComponent } from './app.component';
import { PropertyListComponent } from './properties/property-list/property-list.component';
import { PropertyComponent } from './properties/property/property.component';
import { PropertyAddressComponent } from './properties/property-address/property-address.component';
import { PropertyService } from './properties/property.service';
import { SearchPropertyPipe } from './pipes/search.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';
import { SafeHtmlPipe } from './pipes/html.pipe';
import { SqFeetPipe } from './pipes/sqfeet.pipe';
import { UnitRentPipe } from './pipes/unit-rent.pipe';

@NgModule({
  imports: [
  	BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
  	routing
  ],
  declarations: [
    SafeHtmlPipe,
    UnitRentPipe,
    SqFeetPipe,
    SearchPropertyPipe,
    HighlightPipe,
  	AppComponent,
  	PropertyListComponent,
    PropertyComponent,
    PropertyAddressComponent
  ],
  providers: [
  	appRoutingProviders,
    PropertyService
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }