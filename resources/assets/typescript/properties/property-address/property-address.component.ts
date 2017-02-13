import { Component, Input} from '@angular/core';
import { Property } from '../property.service';

@Component({
    selector: 'property-address',
    template: require('./property-address.component.html'),
})
export class PropertyAddressComponent {
    @Input()
    property: Property;
}