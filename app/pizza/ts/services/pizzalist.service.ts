import "rxjs/Rx";
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Pizza} from '../models/pizza.model';

@Injectable() 
export class PizzaListService {
    constructor (private http:Http) {}
    
    getPizzaList():Observable<Array <Pizza>> {
        let endpoint_url:string ="http://localhost:8080/http/pizzalist";
        return this.http
        .get(endpoint_url, {method: 'Get'})
        .map( (responseData) => {
            return responseData.json();
        })
        .map((pizzaList: Array<any>) =>  {
            let result:Array<Pizza> = [];
            
            if (pizzaList) {
                pizzaList.forEach((pizza) => {
                    result.push(new Pizza(pizza.id,
                                          pizza.name,
                                          pizza.size,
                                          pizza.price,
                                          pizza.image));
                                          
                });
            }
            console.log(result.length + " Pizzen erhalten.");
            return result;
        })
    }
}