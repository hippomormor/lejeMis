import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: ['app/css/app.component.css'],
    templateUrl: 'app/html/app.component.html',
})

export class AppComponent {
    private _title = 'Registrering';
    set title(value: string) {
        this._title = value;
    }
}
