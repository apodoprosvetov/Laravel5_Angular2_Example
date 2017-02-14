import { Injectable } from '@angular/core';
import { Response }          from '@angular/http';
import { MyHttpService } from '../my-http.service';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class Property {
    constructor(
        public id: number,
        public name: string,
        public description: string,
        public address1: string,
        public address2: string,
        public country: string,
        public state: string,
        public city: string,
        public zipcode: number
    ) { }
}

@Injectable()
export class PropertyService {

    private propertiesUrl = 'api/property';

    constructor (private http: MyHttpService) {}

    getProperties (): Observable<Property[]> {
        return this.http.get(this.propertiesUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    getProperty (id: number | string): Observable<Property> {
        const url = `${this.propertiesUrl}/${id}`;
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body ;
    }

    private handleError (error: Response | any) {
        // In a real world app, we might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}