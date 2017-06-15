export class Pizza {
    
    constructor(private _id:number,
                private _name:string,
                private _size:string,
                private _price:number,
                private _image:string) {
        
    }
    
    get id():number { return this._id;}
    get name():string  { return this._name;}
    get size():string  { return this._size;}
    get price():number { return this._price;}
    get image():string  { return this._image;}
    
    set id(value: number) { this._id = value;}
    set name(value: string) { this._name = value;}
    set size(value: string) { this._size = value;}
    set pricae(value: number) { this._price = value;}
    set image(value: string) { this._image = value;}
}