import { Component, OnInit, OnDestroy } from '@angular/core';
import { Property, PropertyService } from '../property.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
    template: require('./property.component.html')
})
export class PropertyComponent implements OnInit {
    errorMessage: string;
    property: Property;
    mode = 'Observable';

    private _sub: Subscription;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private propertyService: PropertyService) {}

    ngOnInit() {
        this._sub = this._route.params.subscribe(params => {
            let id = +params['id']; // (+) converts string 'id' to a number
            this.getProperty(id);
        });
    }

    getProperty(id: number) {
        this.propertyService.getProperty(id)
            .subscribe(
                property => this.property = property,
                error =>  this.errorMessage = <any>error);

    }

    ngOnDestroy() {
        this._sub.unsubscribe();
    }

}