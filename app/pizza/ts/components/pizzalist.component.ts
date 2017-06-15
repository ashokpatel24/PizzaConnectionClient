import {Component} from "@angular/core";
import {PizzaListService} from '../services/pizzalist.service';
import {Pizza} from '../models/pizza.model';
import {Router} from '@angular/router';

@Component({
    selector: "pizzalist",
    templateUrl: "app/pizza/templates/pizzalist.html",
    styleUrls: ['app/css/styles.css']
})
export class PizzaListComponent {
    
    private pizzaList:Array<Pizza>;
    
    constructor(private _pizzaService:PizzaListService, private _router:Router) {
        this._pizzaService.getPizzaList().subscribe(res => this.pizzaList = res);
    }
    
    getPizzaList() {
        return this.pizzaList;
    }
    
    showDetails(pizza:Pizza) {
        this._router.navigate(['pizzadetail', pizza.id]);
    }
}