import {Component, OnInit}  from '@angular/core';
import {Location}           from '@angular/common';
import {Headers, Http}    from '@angular/http';

import {AppComponent}       from "./app.component"
import {Lejer}              from "./lejer";

import 'rxjs/add/operator/toPromise';
import {LEJER} from "./mock-lejer";
//import 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'html/register.component.html',
    styleUrls: ['css/register.component.css'],
})

export class RegisterComponent implements OnInit {
    private lejerURL = 'http://custom-env.huc3devb74.eu-central-1.elasticbeanstalk.com/api/lejer';
    private headers = new Headers({'Content-Type': 'application/json'});
    private lej = LEJER;
    private myLejer = new Lejer();

    constructor(
        private appComponent : AppComponent,
        private location: Location,
        private http: Http) {}

    ngOnInit(): void {
        this.appComponent.title = 'Registrering';
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
       // if(this.lej.fornavn !== null)
            this.create(this.myLejer);
    }

    create(lejer: Lejer): Promise<Lejer> {
        console.log('Posting to DB');
        return this.http
            .post(this.lejerURL, JSON.stringify(lejer), {headers: this.headers})
            .toPromise()
            //.then(() => lejer)
            .then(res => res.json().data)
            .catch(RegisterComponent.handleError);
    }

    private static handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}







//import {Observable} from "rxjs";
/*
 private getHeaders(){
 //  this.headers.append('Accept', 'application/json');
 return this.headers;
 }
 save(): void{
 this.create(this.lej)
 .subscribe(
 (r: Response) => {console.log('success');}
 );

 }
 create(lejer: Lejer) : Observable<Response>{
 // this won't actually work because the StarWars API doesn't
 // is read-only. But it would look like this:
 return this
 .http
 .post(this.lejerURL, JSON.stringify(lejer), {headers: this.getHeaders()});
 }*/
