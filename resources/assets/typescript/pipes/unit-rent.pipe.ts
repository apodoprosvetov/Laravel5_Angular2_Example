import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'unitRent',
    pure: false
})

export class UnitRentPipe implements PipeTransform {

    transform(amount: number, type: string): string {
        if (typeof amount !== "undefined") {
            return amount + ' / ' + type;
        }else{
            return 'N/A';
        }
    }
}