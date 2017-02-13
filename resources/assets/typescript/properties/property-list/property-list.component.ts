import { Component, OnInit } from '@angular/core';
import { Property, PropertyService } from '../property.service';


@Component({
    template: require('./property-list.component.html'),
})
export class PropertyListComponent implements OnInit {
    errorMessage: string;
    properties: Property[];
    mode = 'Observable';

    constructor (private propertyService: PropertyService) {}


    ngOnInit() {
        this.getProperties();
    }

    getProperties() {
        this.propertyService.getProperties()
            .subscribe(
                properties => this.properties = properties,
                error =>  this.errorMessage = <any>error);

    }

}