import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from '../services/auth.service';
import {Message} from 'primeng/primeng';
import {Account} from '../models/account.model';

@Component({
    selector:       'login',
    templateUrl:    'app/login/templates/login.html',
    styleUrls:      ['app/css/styles.css']
})

export class LoginComponent {
    
    private email:string;
    private passw:string;
    
    msgs: Message[] = [];
    
    constructor(private _authService:AuthService, private _router:Router, private _account:Account) {}
    
    login() {
        console.log("Trying to login with user : " + this.email);
        this._authService.login(this.email, this.passw).subscribe((result) => {
            if (result.authToken.success == true) {
                this._account.id = result.id;
                this._account.salutation = result.salutation;
                this._account.firstName = result.firstName;
                this._account.lastName = result.lastName;
                this._account.streetName = result.streetName;
                this._account.zipCode = result.zipCode;
                this._account.cityName = result.cityName;
                this._router.navigate(['confirmation']);
            } else {
                this.msgs.push({severity: 'error', summary: 'Fehler', detail: 'Sie konnten nicht angemeldet werden.'});
            }
        });
    }
}