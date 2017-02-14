import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, XHRBackend, RequestOptions } from '@angular/http';

import { routing, appRoutingProviders }       from './app.routing';
import { Router } from '@angular/router';
import { MyHttpService } from './my-http.service';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './errors/not-found.component';
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
    NotFoundComponent,
  	PropertyListComponent,
    PropertyComponent,
    PropertyAddressComponent
  ],
  providers: [
  	appRoutingProviders,
    PropertyService,
      {
          provide: MyHttpService,
          useFactory: (backend: XHRBackend, options: RequestOptions, router: Router) => {
              return new MyHttpService(backend, options, router);
          },
          deps: [XHRBackend, RequestOptions, Router]
      }
  ],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }