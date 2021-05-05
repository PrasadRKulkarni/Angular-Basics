import { Component } from '@angular/core';

@Component({
    selector: 'my-employee',
    templateUrl: './employee.component.html',
    styleUrls: ['../app.component.css']
})
export class EmployeeComponent {
    firstName: string = 'Tom';
    lastName: string = 'Kulkarni';
    gender: string = 'Male';
    age: number = 25;

    columnSpan: number = 2;

    showDetails: boolean = false;

    toggle(): void {
        this.showDetails = !this.showDetails;
    }

}