import {Component} from '@angular/core';
import {Account} from '../../../login/ts/models/account.model';
import {Cart} from '../../../cart/ts/models/cart.model';
import {CheckoutService} from '../../../checkout/ts/services/checkout.service';
import {Router} from "@angular/router";
import {Message} from 'primeng/primeng';

@Component({
    selector:       'confirmation',
    templateUrl:    'app/confirmation/templates/confirmation.html',
    styleUrls:     ['app/css/styles.css']
})

export class ConfirmationComponent {
    
    msgs: Message[] = [];
    
    constructor (private _checkoutService:CheckoutService, private _router:Router, private _cart:Cart, private _account:Account) {}
    
    get Account():Account {
        return this._account;
    }
    
    get cart():Cart {
        return this._cart;
    }
    
    get loggedIn():boolean {
        return this._account._id > 0;
    }
    
    checkout() {
        this._checkoutService.checkout().subscribe(res => {
            if (res.statusCode == 'OK')  {
                this._cart.flush();
                this._router.navigate(['checkout']);
            } else {
                this.msgs.push({severity: 'error', summary: 'Fehler!', detail: res.statusMessage});
            }
        });
    }
}