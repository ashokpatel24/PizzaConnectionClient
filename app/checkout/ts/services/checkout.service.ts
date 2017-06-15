import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Cart} from '../../../cart/ts/models/cart.model';
import {ResponseDto} from '../../../data-transfer-objects/response-dto.model';
import {CheckoutDto} from '../../../data-transfer-objects/checkout-dto.model';
import {Account} from '../../../login/ts/models/account.model';

@Injectable()
export class CheckoutService {

  constructor(private http: Http, private _cart:Cart, private _account:Account) { }

  checkout():Observable<ResponseDto> {
    let checkoutDto:CheckoutDto = new CheckoutDto();
    checkoutDto.cart = this._cart;
    checkoutDto.token = localStorage.getItem('auth_token');
    checkoutDto.account = this._account;
    let endpoint_url:string = "http://localhost:8080/http/checkout";
    let body = JSON.stringify(checkoutDto);
    let headers = new Headers({'Content-Type': 'application/json' });
    let options = new RequestOptions({headers: headers });
    return this.http.post(endpoint_url, body, options)
      .map(res => res.json())
      .map((data:any) => ResponseDto.fromJson(data))
  }
} 


