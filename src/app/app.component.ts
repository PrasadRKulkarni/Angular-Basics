import { CurrencyPipe, JsonPipe } from '@angular/common';
import { BoundElementProperty } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { SimpleComponent } from './employee/Others/simple.component'
@Component({
  selector: 'app-root',
  template: `<div>
                  <img src='{{imgLogo}}' />

                  <h1>{{'Welcome to ' + pageHeader}}</h1>
                  
                  <my-employee></my-employee>
                  <br/>

                  {{'Interpolation example: ' + getFullName()}}
                  <br/>
                  In Property Binding we use square brackets: <img [src]='imgLogo' />

                  <br/>

                  Property Binding Ex: <button [disabled] = 'isDisabled'>Click</button>

                  <br/><br/>

                  <button [ngStyle]="addStyles()">NgStyle Ex</button>

                  <br/><br/>

                  <h1>Two way data binding example. </h1>
                  <br/>
                  <input [(ngModel)]="name" />
                  You entered: {{name}}
                  <br/><br/>
                  Property Binding - Square Brackets <br/>
                  Event Binding - Parantheses

                  <br/>
                  <list-emp></list-emp>
                  <br/> <br/>


                  <input [(ngModel)]="simpleInput" />
                  You entered from Parent Component : {{simpleInput}}

                  <simple-hook [simpleInputChild] = 'simpleInput'></simple-hook>

                  <br/> <br/>

                  <div style='padding: 5px'> 
                    <ul class='nav nav-tabs'>
                        <li> <a routerlink='home'>Home</a></li>
                        <li> <a routerlink='employees'>Employee</a></li>
                    </ul>                
                  </div>
                  <router-outlet></router-outlet>


              </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  pageHeader: string = 'Employee Details';
  imgLogo: string = 'https://www.pragimtech.com/wp-content/uploads/2019/02/pargim-logo-1.png';

  firstName: string = 'Prasad';
  lastName: string = "Kulkarni";

  getFullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  isDisabled: boolean = false;

  addStyles() {
    let styles = {
      'font-size.px': 30,
      'font-weight': 'bold'
    }

    return styles;
  }

  name: string = "Prasad";

  ngOnInit() {
    //console.log('On Init Life Cycle hook');
  }

  //ngOnChanges Hook
  simpleInput: string;


}
