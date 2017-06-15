import {Cart} from '../cart/ts/models/cart.model';
import {Account} from '../login/ts/models/account.model';

export class CheckoutDto {
    private _cart:Cart;
    private _token:string
    private _account:Account;
    
    constructor() {}
    
    get cart(): Cart { return this._cart;}
    
    set cart(value: Cart) { this._cart = value;}
    
    get token(): string { return this._token; }
    
    set token(value: string) { this._token = value;}
    
    set account(value:Account) {
        this._account = value;
    }
}