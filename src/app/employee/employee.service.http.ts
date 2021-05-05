import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class EmployeeServiceHttp {

    constructor(private _http: HttpClient) {

    }

    // getEmployees(): Observable<IEmployee[]> {
    //     return this._http.get("http://localhost: 3333/api/employees")
    //         .map((response: Response) => <IEmployee[]>response.json());

    // }


    getData(): Observable<any> {
        return this._http.get('http://localhost: 3333/api/employees')
            .pipe(map(result => result));
    }

}