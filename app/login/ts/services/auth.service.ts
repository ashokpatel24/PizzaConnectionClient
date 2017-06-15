import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {UserAuthDto} from '../../../data-transfer-objects/user-auth-dto.model';
import {UserDto} from '../../../data-transfer-objects/user-dto.model';
import {Router} from '@angular/router';
import {Account} from '..//models/account.model';
import {Cart} from '../../../cart/ts/models/cart.model';

@Injectable()
export class AuthService {
    
    
    constructor(private http:Http, private _cart:Cart, private _account:Account, private _router:Router) {}
    
    login(email, passwd):Observable<UserDto> {
        console.log("Try to login with Emailadress: " + email + " AND password: " + passwd);
        let endpoint_url = "http://localhost:8080/http/login";
        let userAuthDto:UserAuthDto = new UserAuthDto(email, passwd);
        let body = JSON.stringify(userAuthDto);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions( { headers:headers});
        return this.http.post(endpoint_url, body, options).map(res => res.json()).map((data: any) => UserDto.fromJson(data))
            .do(res => console.log(res)).do(res =>
                {if (res.authToken.success) {
                    localStorage.setItem('auth_token', res._authToken.token);
                    console.log("Login erfolgreich: this.loggedIn = " + res.authToken.success);
                }
            }
            )
    }
    
    logout() {
        localStorage.removeItem('auth_token');
        this._cart.flush();
        this._account.flush();
        this._router.navigate(['']);
    }
    
    isLoggedIn() {
        let token: string = localStorage.getItem('auth_token');
        return token != null && token.length > 0;
    }
}
