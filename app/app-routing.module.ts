import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent }    from './register.component';
import { ContactComponent }     from './contact.component';

const routes: Routes = [
    { path: '', redirectTo: '/registrering', pathMatch: 'full' },
    { path: 'registrering',  component: RegisterComponent },
    { path: 'kontakt',     component: ContactComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}