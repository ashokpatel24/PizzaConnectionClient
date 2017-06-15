import {Component} from '@angular/core';
import {Cart} from '../../../cart/ts/models/cart.model';
import {CartItem} from '../../../cart/ts/models/cartitem.model';
import {Router} from '@angular/router';

@Component({
    selector:       'cart',
    templateUrl:    'app/cart/templates/cart.html',
    styleUrls:      ['app/css/styles.css']
})

export class CartComponent {
    
    constructor(private _router:Router, private _cart:Cart) { }
    
    checkout() {
        if (localStorage.getItem('auth_token') == null) {
            this._router.navigate(['orderoption']);
        } else {
            this._router.navigate(['confirmation']);
        }
    }
    
    get sumtotal():number {
        return this._cart.sumtotal;
    }
    
    decreaseItemAmount(item:CartItem) {
        this._cart.decreaseItem(item);
    }
    
    increaseItemAmount(item:CartItem) {
        this._cart.addItem(item);
    }
    
    removeItem(item:CartItem) {
        this._cart.removeItem(item);
    }
    
    get hasContent():boolean {
        return this._cart.getContent().length > 0;
    }
}