import {Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector:       'order-option',
    styleUrls:      ['app/css/styles.css'],
    templateUrl:    'app/order-option/templates/orderoption.html'
})

export class OrderOptionComponent {
    
    constructor(private _router: Router) {}
    
    guestOrder() {
        this._router.navigate(['accountcreator', false]);
    }
    
    login() {
        this._router.navigate(['login']);
    }
    
    createAccount() {
        this._router.navigate(['accountcreator', true]);
    }
}