import {PipeTransform, Pipe} from '@angular/core';

@Pipe({
    name: 'highlight',
    pure: false
})

export class HighlightPipe implements PipeTransform {

    transform(text: string, search): string {

        if (search) text = text.replace(new RegExp('(' + search + ')', 'gi'),
            '<mark>$1</mark>')

        return text;
    }
}