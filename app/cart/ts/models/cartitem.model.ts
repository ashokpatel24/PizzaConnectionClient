export class CartItem {
    private _amount:number;
    
    constructor(private _pizzaId:number,
                private _price:number,
                private _image:string,
                private _size:string,
                private _name:string) {
        this._amount = 1;
    }
    
    get pizzaId(): number { return this._pizzaId;}
    get price(): number {return this._price;}
    get image(): string {return this._image;}
    get size(): string {return this._size;}
    get amount(): number {return this._amount;}
    get name(): string {return this._name;}
    
    decreaseAmount():number { return --this._amount;}
    increaseAmount():number { return this._amount++;}
    
    get subtotal():number { return this._amount * this._price;}
}