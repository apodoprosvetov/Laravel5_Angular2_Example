import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'sqfeet',
    pure: false
})

export class SqFeetPipe implements PipeTransform {

    transform(value: string): string {
        if (typeof value !== "undefined") {
            return value + ' ft&#178;';
        }else{
            return 'N/A';
        }
    }
}