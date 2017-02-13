import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'searchProperty',
})
export class SearchPropertyPipe implements PipeTransform {
    transform(items: any[], field : string, value : string): any[] {
        if (!items) return [];

        if(value !== undefined){
            return items.filter(it => it[field].indexOf(value) > -1);
        }else{
            return items;
        }
    }
}