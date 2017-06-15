import {Component} from '@angular/core';
import {PizzaDetail} from '../models/pizzadetail.model';
import {PizzaDetailService} from '../services/pizzadetail.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Cart} from '../../../cart/ts/models/cart.model';
import {CartItem} from '../../../cart/ts/models/cartitem.model';

@Component({
    selector: 'pizzadetail',
    templateUrl: 'app/pizza/templates/pizzadetail.html',
    styleUrls: ['app/css/styles.css']
})

export class PizzaDetailComponent {
    
    private _pizzaDetail:PizzaDetail;
    
    constructor(private _pizzaDetailService:PizzaDetailService, private _route:ActivatedRoute, private _location:Location, private _cart:Cart) {
        
        let id = this._route.snapshot.params['id'];
        this._pizzaDetailService.getPizzaDetail(id).subscribe(pizzaDetail => {this._pizzaDetail = pizzaDetail;},
                                                              err => console.error(err),
                                                              () => console.log('done: ' + this._pizzaDetail.image));
    }
    
    addToCart(pizzaDetail:PizzaDetail) {
        this._cart.addItem(new CartItem(pizzaDetail.id, pizzaDetail.price, pizzaDetail.image, pizzaDetail.size, pizzaDetail.name ));
    }
    
    get currentAmount():number {
        let currentAmount = 0;
        for (let i = 0; i < this._cart.getContent().length; i++) {
            if (this._cart.getContent()[i].pizzaId == this._pizzaDetail.id) {
                currentAmount = this._cart.getContent()[i].amount;
            }
        }
        return currentAmount;
    }
    
    historyBack() {
        this._location.back();
    }
    
    get pizzaDetail():PizzaDetail {
        return this._pizzaDetail;
    }
}