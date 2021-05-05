import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable()
export class EmployeeService {

    getEmployees(): IEmployee[] {
        return [
            { code: 100, name: 'Prasad', gender: 'Male', sal: 100, dob: '01/01/2000' },
            { code: 200, name: 'Mahesh', gender: 'Male', sal: 100, dob: '01/01/2000' },
            { code: 300, name: 'Saroja', gender: 'Female', sal: 100, dob: '01/01/2000' },
            { code: 400, name: 'Poonam', gender: 'Female', sal: 100, dob: '01/01/2000' },
            { code: 500, name: 'Sid', gender: 'Female', sal: 100, dob: '01/01/2000' },
            { code: 600, name: 'Poonam', gender: 'Female', sal: 100, dob: '01/01/2000' },
            { code: 700, name: 'Sid', gender: 'Female', sal: 100, dob: '01/01/2000' }
        ];
    }

}