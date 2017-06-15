import {Component} from '@angular/core';
import {Cart} from '../../../cart/ts/models/cart.model';

@Component({
    selector:       'checkout',
    styleUrls:      ['app/css/styles.css'],
    templateUrl:    'app/checkout/templates/checkout.html'
})
export class CheckoutComponent {
    
    constructor(private _cart:Cart) {
        this._cart.flush();
    }
}