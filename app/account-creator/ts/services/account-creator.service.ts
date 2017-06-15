import "rxjs/Rx";
import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Account} from '../../../login/ts/models/account.model';
import {ResponseDto} from '../../../data-transfer-objects/response-dto.model';
import {AccountDto} from '../../../data-transfer-objects/account-dto.model';

@Injectable()
export class AccountCreatorService {
    
    constructor(private http:Http) {}
    
    createAccount(account:Account):Observable<ResponseDto> {
        
        let endpoint_url:string = "http://localhost:8080/http/createaccount";
        let accountDto:AccountDto= this.mapAccount(account);
        let body = JSON.stringify(accountDto);
        let headers = new Headers({'Content-Type': 'application/json' });
        let options = new RequestOptions({headers:headers});
        
        return this.http.post(endpoint_url, body, options).map(res => res.json()).map((data: any) => ResponseDto.fromJson(data))
    }
    
    private mapAccount(value:Account):AccountDto {
        let accountDto:AccountDto = new AccountDto();
        accountDto.salutation = value.salutation;
        accountDto.firstName = value.firstName;
        accountDto.lastName = value.lastName;
        accountDto.streetName = value.streetName;
        accountDto.zipCode = value.zipCode;
        accountDto.cityName = value.cityName;
        accountDto.userName = value.userName;
        accountDto.password = value.password;
        return accountDto;
    }
}