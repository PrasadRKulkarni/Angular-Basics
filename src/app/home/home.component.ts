import { Component } from '@angular/core';
import { UserPreferenceService } from '../employee/userpreference.service';
import { Router, RouterLinkActive } from '@angular/router'
import { Route } from '@angular/compiler/src/core';

@Component({
    template: `<h1>Welcome to Home Page</h1>
                Colour Preference : 
                <input type='text' [(ngModel)]='colour' [style.background] = 'colour'/>

                <br/><br/>

                <input type='button' value='Back Button' (click)='onBackButtonClick()' />

        
                `
})
export class HomeComponent {

    constructor(private _userPreferenceService: UserPreferenceService,
        private _router: Router) {

    }

    get colour(): string {
        return this._userPreferenceService.colourPreference;
    }

    set colour(value: string) {
        this._userPreferenceService.colourPreference = value;
    }


    onBackButtonClick(): void {
        this._router.navigate(['./employees']);
    }
}