import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'simple-hook',
    templateUrl: './simple.component.html'
    //template: ''
})
export class SimpleComponent implements OnChanges {
    @Input()
    simpleInputChild: string;


    ngOnChanges(changes: SimpleChanges) {
        for (let propertyName in changes) {
            let change = changes[propertyName];
            let current = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log('Current Value: ' + current)
            console.log('Previous Value: ' + previous)


        }
    }
}