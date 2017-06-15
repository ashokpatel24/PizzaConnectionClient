import {CartItem} from './cartitem.model';

export class Cart {
    
    private _content:Array<CartItem>
    
    constructor() {
        this._content = new Array<CartItem>();
    }
    
    getContent():Array<CartItem> {
        return this._content;
    }
    
    flush() {
        this._content = new Array<CartItem>();
    }
    
    get sumtotal():number {
        let sum = 0;
        this._content.forEach(function(item) {
            sum += item.subtotal;
        });
        return sum;
    }
    
    addItem(item:CartItem) {
        let cartItem = new CartItem(item.pizzaId, item.price, item.image, item.size, item.name);
        let found:boolean = false;
        
        this._content.forEach(function(item) {
            if (item.pizzaId == cartItem.pizzaId) {
                item.increaseAmount();
                found = true;
                // Die gewählte Pizza war bereits im Warenkob, Anzahl wird um eins erhöht
            }
        });
        
        if(!found) {
            this._content.push(cartItem);
            // Die gewünschte Pizza war noch nicht im Warenkorb, wird mit Anzahl 1 eingefügt
        }
    }
    
    decreaseItem(item:CartItem) {
        let cartItem = new CartItem(item.pizzaId, item.price, item.image, item.size, item.name);
        for (let i = 0; i < this._content.length; i++) {
            if (this._content[i].pizzaId == cartItem.pizzaId) {
                if (this._content[i].decreaseAmount() == 0) {
                    this._content.splice(i, 1);
                }
            }
        }
    }
    
    removeItem(item:CartItem) {
        let cartItem = new CartItem(item.pizzaId, item.price, item.image, item.size, item.name);
        for (let i = 0; i < this._content.length; i++) {
            if (this._content[i].pizzaId == cartItem.pizzaId) {
                this._content.splice(i, 1);
            }
        }
    }
}