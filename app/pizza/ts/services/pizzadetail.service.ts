import 'rxjs/Rx';
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {PizzaDetail} from '../models/pizzadetail.model';

@Injectable() 
export class PizzaDetailService {
    constructor(private http: Http) {}
    
    getPizzaDetail(id:number):Observable<PizzaDetail> {
        let endpoint_url:string = 'http://localhost:8080/http/pizzadetails?id=' + id;
        return this.http.get(endpoint_url, {method: 'Get'})
        .map((responseData) => { return responseData.json();})
        .map((pizzaDetail:PizzaDetail) => {
            let result:PizzaDetail;
            if (pizzaDetail) {
                result = new PizzaDetail(
                    pizzaDetail.id,
                    pizzaDetail.name,
                    pizzaDetail.description,
                    pizzaDetail.size,
                    pizzaDetail.price,
                    pizzaDetail.image);
            }
            if (result == null) {
                console.log('ERROR: result == null');
            }
            return result;
        });
    }
}