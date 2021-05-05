import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-emp',
    templateUrl: './employeelist.component.html',
    styleUrls: ['./employeelist.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {

    employees: IEmployee[];

    constructor(private _employeeService: EmployeeService) {

    }

    ngOnInit() {
        this.employees = this._employeeService.getEmployees();
    }

    getEmployees(): void {
        this.employees = [
            { code: 100, name: 'Prasad', gender: 'Male', sal: 100, dob: '01/01/2000' },
            { code: 200, name: 'Mahesh', gender: 'Male', sal: 100, dob: '01/01/2000' },
            { code: 300, name: 'Saroja', gender: 'Female', sal: 100, dob: '01/01/2000' },
            { code: 400, name: 'Poonam', gender: 'Female', sal: 100, dob: '01/01/2000' },
            { code: 500, name: 'Sid', gender: 'Female', sal: 100, dob: '01/01/2000' },
            { code: 600, name: 'Poonam', gender: 'Female', sal: 100, dob: '01/01/2000' },
            { code: 700, name: 'Sid', gender: 'Female', sal: 100, dob: '01/01/2000' },
            { code: 900, name: 'Poonam', gender: 'Female', sal: 100, dob: '01/01/2000' },

        ];
    }

    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }

    getTotalEmpCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmpCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getTotalFemaleEmpCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    selectedEmployeeCountRadioButton: string = 'All';

    onEmployeeCountRadioButtonChange(selecteRadioButtunValue: string): void {
        this.selectedEmployeeCountRadioButton = selecteRadioButtunValue;
    }

}