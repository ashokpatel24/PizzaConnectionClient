import {Component} from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {Router} from "@angular/router";
import {AuthService} from './login/ts/services/auth.service';

@Component({
    selector: 'pizzaconnection',
    templateUrl: 'app/app.html',
    styleUrls: ['app/css/styles.css'],
})

export class AppComponent{
    
    private items: MenuItem[];
    
    constructor(private _router:Router, private _authService:AuthService) {
        
        localStorage.removeItem('auth_token');
        
            this.items = [{
            label: 'Speisekarte',
            icon: 'fa fa-cutlery',
            routerLink: ['']
        },
        {
            label: 'Warenkorb',
            icon: '',
            routerLink: ['/cart']
        }]
    }
    
    logout() { this._authService.logout(); }
    
    login() { this._router.navigate(['login']); }
    
    isLoggedIn() { return this._authService.isLoggedIn(); }
}