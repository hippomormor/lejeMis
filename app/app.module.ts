import { NgModule }             from '@angular/core';
import { BrowserModule }        from '@angular/platform-browser';
import { FormsModule }          from '@angular/forms';
import { HttpModule }           from '@angular/http';

import { AppComponent }         from './app.component';
import { ContactComponent }     from './contact.component';
import { RegisterComponent }    from './register.component';
import { AppRoutingModule }     from './app-routing.module';

@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
  ],
    declarations: [
      AppComponent,
      RegisterComponent,
      ContactComponent
  ],
  bootstrap:    [
      AppComponent
  ]
})

export class AppModule { }
