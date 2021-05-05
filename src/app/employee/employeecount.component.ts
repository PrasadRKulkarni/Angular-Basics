import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'emp-count',
    templateUrl: './employeecount.component.html'
})

export class EmployeeCountComponent {
    @Input()
    all: number;

    @Input()
    male: number;

    @Input()
    female: number;


    //Child to parent data passing
    selecteRadioButtunValue: string = 'All';

    @Output()
    countRadioButtonSelectionChange: EventEmitter<string> = new EventEmitter<string>();

    onRadioButtonSelectionChange() {
        this.countRadioButtonSelectionChange.emit(this.selecteRadioButtunValue);
    }

}