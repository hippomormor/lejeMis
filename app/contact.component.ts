import {Component, OnInit}   from '@angular/core';
import {Location}            from '@angular/common';

import {AppComponent}        from './app.component';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'html/contact.component.html'
})

export class ContactComponent implements OnInit {

    constructor(
        private appComponent: AppComponent,
        private location: Location) { }

    ngOnInit(): void {
        this.appComponent.title = 'Kontakt';
    }

    goBack(): void {
        this.location.back();
    }
}
